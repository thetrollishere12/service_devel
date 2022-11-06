// import '@fullcalendar/core/vdom'
import "@fullcalendar/react/dist/vdom";
import React, { useEffect, useRef, useState } from "react";
import FullCalendar, { EventUi } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { sliceEvents, createPlugin } from "@fullcalendar/react";
import AppLayout from '@/Layouts/AppLayout';
import BusinessLeftNav from '@/CustomComponents/BusinessLeftNav';
import styled from "@emotion/styled";
import { useForm, usePage } from '@inertiajs/inertia-react';
import moment from 'moment'

export const StyleWrapper = styled.div`
.fc-addEventButton-button.fc-button.fc-button-primary{
    background: #172153;
}  
.fc-next-button.fc-button.fc-button-primary,.fc-prev-button.fc-button.fc-button-primary{
    background: #ffffff00;
    border-color: aliceblue;
    color: black;
    position: relative;
    top: -6px;
    margin: 0 20px;
}
.fc-dayEventButton-button.fc-button.fc-button-primary,.fc-monthEventButton-button.fc-button.fc-button-primary{
    background: #ffffff00;
    color: black;
    width: 70px;
}
.fc-dayEventButton-button.fc-button.fc-button-primary.fc-button-active,.fc-monthEventButton-button.fc-button.fc-button-primary{
    color: orange;
}
.fc-toolbar h2 {
  display: inline;
}
.fc-daygrid-event-harness {
    display: none;
}
.fc-daygrid-event-harness:first-of-type {
    display: block;
}
.fc-event-time{
    display: none;
}
`

const customView = (props) => {
    let segs = sliceEvents(props, true);
    // console.log("segs", segs);
    // console.log("props", props);
    let key = 0;
    return (
        <div>
            <div className="view-title">
                {props.dateProfile.currentRange.start.toUTCString()}
            </div>
            <div className="view-events">{segs.length} events</div>
            {segs.map((seg) => {
                return (
                    <div key={key++}>
                        {" "}
                        {JSON.stringify(seg)} <br />
                        <br />
                        <br />{" "}
                    </div>
                );
            })}
        </div>
    );
};

const customEventContent = (event) => {
    // console.log("customEvent", event);
    // console.log("customEventCurrentData", event.event.toPlainObject());
    const plainEvent = event.event.toPlainObject();
    if (plainEvent.extendedProps && plainEvent.extendedProps.displayAsCustom) {
        return (
            <div>
                <h1>customTitle</h1>
                <p>Event is at {event.timeText}</p>
                <img
                    style={{ objectFit: "fill", width: "100%", height: "100%" }}
                    alt=""
                    src={
                        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    }
                />
            </div>
        );
    }
};

const customViewPlugin = createPlugin({ views: { custom: customView } });

export default function DemoFullCalendar() {
    const calendarRef = useRef(null);

    const { appointments } = usePage().props; //, month
    // console.log(month);

    const startDate = new Date();
    const endDate = new Date();
    const endDate2 = new Date();
    endDate2.setHours(2);
    endDate.setHours(24);

    const form = useForm({
        event: [],
    });

    var events: any[] = [];
    var count: number[] = [];

    appointments.map((data, i) => {
        var cnt = 0;
        appointments.map((subdata, i) => {
            let v1 = moment(data.start_date).format("YYYY-MM-DD");
            let v2 = moment(subdata.start_date).format("YYYY-MM-DD");
            if (v1 == v2) {
                cnt++;
            }
        })
        events[i] = {
            start: data.start_date,
            end: data.end_date,
            allday: false,
            title: "appointment : " + cnt
        }
    })

    //Get an event by its ID once the calendar has loaded
    useEffect(() => {
        //@ts-ignore
        const calendarApi = calendarRef?.current?.getApi();
        // const event = calendarApi.getEventById("a");
        // console.log(appointments);
        // calendarApi.gotoDate(month);
    });

    const customViews = {
        timeGridFourDay: {
            type: "timeGrid",
            duration: { days: 2 },
            buttonText: "4 day",
            eventContent: { customEventContent }
        }
    };

    //add an event to the calendar
    const addEvent = () => {
        //@ts-ignore
        const calendarApi = calendarRef?.current?.getApi();
        const dateStr = prompt("Enter a date in YYYY-MM-DD format");
        let title = prompt("Please enter a new title for your event");
        var date = new Date(dateStr + "T00:00:00");

        if (!isNaN(date.valueOf())) {
            calendarApi.addEvent({
                title: title,
                start: date,
                allDay: true
            });
        } else {
            alert("Invalid date.");
        }
    };

    const toDay = () => {
        var now = new Date();
        const offset = now.getTimezoneOffset()
        now = new Date(now.getTime() - (offset * 60 * 1000));
        // console.log(now.toISOString().split('T')[0])
        form.get(`/user/appointment/day/${now.toISOString().split('T')[0]}`, {
            onFinish: () => form.reset(),
        });
    };

    const toMonth = () => {
        // form.get('/user/business/calendar', {
        //     onFinish: () => form.reset(),
        // });
    };

    const prevMonth = () => {
        const calendarApi = calendarRef?.current?.getApi();
        calendarApi.prev();
        var to = customizeMonth(calendarApi?.getCurrentData().viewTitle);
        form.get(`/user/appointment/month/${to}`, {
            onFinish: () => form.reset(),
        });
    };

    const nextMonth = () => {

        const calendarApi = calendarRef?.current?.getApi();
        calendarApi.next();
        var to = customizeMonth(calendarApi?.getCurrentData().viewTitle);
        form.get(`/user/appointment/month/${to}`, {
            onFinish: () => form.reset(),
        });
    };

    const customButtons = {
        addEventButton: {
            text: "Add New",
            click: addEvent
        },
        dayEventButton: {
            text: "Day",
            click: toDay
        },
        monthEventButton: {
            text: "Month",
            click: toMonth
        },
        customprev: {
            text: "<",
            click: prevMonth
        },
        customnext: {
            text: ">",
            click: nextMonth
        }
    };

    const customizeMonth = (data: String) => {
        let array = data.split(" ");
        let month = { "January": "01", "February": "02", "March": "03", "April": "04", "May": "05", "June": "06", "July": "07", "August": "08", "September": "09", "October": "10", "November": "11", "December": "12" };
        let res: String = "";
        res = array[1] + "-" + month[array[0]];
        // console.log(res);
        return res;
    }

    // const gotoMonth1 = (data) => {
    //     const calendarApi = calendarRef?.current?.getApi();
    //     // calendarApi.prev();
    //     if (calendarApi) {
    //         var to = customizeMonth(calendarApi?.getCurrentData().viewTitle);
    //         form.get(`/user/appointment/month/${to}`, {
    //             onFinish: () => form.reset(),
    //         });
    //     }

    //     // console.log(calendarApi.dateEnv);
    // }

    const [canDragToMove, setCanDragToMove] = useState<boolean>(true);
    const handleCanDragToMove = () => {
        setCanDragToMove(!canDragToMove);
    };

    const [canDragToCreate, setCanDragToCreate] = useState<boolean>(true);
    const handleCanDragToCreate = () => {
        setCanDragToCreate(!canDragToCreate);
    };

    const selectCallback = (data) => {
        // console.log(data);
        form.get(`/user/appointment/day/${data.startStr}`, {
            onFinish: () => form.reset(),
        });
        // let title = prompt("Please enter a new title for your event");
        // let calendarApi = data.view.calendar;

        // calendarApi.unselect(); // clear date selection

        // if (title) {
        //     calendarApi.addEvent({
        //         id: 1,
        //         title,
        //         start: data.startStr,
        //         end: data.endStr,
        //         allDay: data.allDay
        //     });
        // }
    };

    const handleEventClick = (data) => {
        if (
            confirm(
                `Are you sure you want to delete the event '${data.event.title}'`
            )
        ) {
            data.event.remove();
        }
    };


    return (
        <AppLayout title="month">
            <BusinessLeftNav />
            <div className="pl-24 pr-8">
                {<div style={{ visibility: "hidden" }}>
                    <h3>Create Event</h3>
                    <label> Toggle Event Drag n Drop </label>
                    <input
                        checked={canDragToMove}
                        onChange={handleCanDragToMove}
                        className="react-switch-checkbox"
                        id={`toggle-drag-event`}
                        type="checkbox"
                    />
                    <label> Toggle Drag to create </label>
                    <input
                        checked={canDragToCreate}
                        onChange={handleCanDragToCreate}
                        className="react-switch-checkbox"
                        id={`toggle-drag-create`}
                        type="checkbox"
                    />
                </div>}
                <StyleWrapper>
                    <FullCalendar
                        customButtons={customButtons}
                        editable={canDragToMove}
                        selectable={canDragToCreate}
                        select={selectCallback}
                        eventStartEditable={canDragToMove}
                        eventDurationEditable={canDragToMove}
                        ref={calendarRef}
                        eventContent={customEventContent}
                        eventClick={handleEventClick}
                        events={events}
                        headerToolbar={{
                            start: "addEventButton", // will normally be on the left. if RTL, will be on the right
                            center: "prev,title,next", // will normally be on the right. if RTL, will be on the left
                            end: "dayEventButton monthEventButton",
                        }}
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            customViewPlugin,
                            interactionPlugin
                        ]}
                        initialView="dayGridMonth"
                        views={customViews}
                    // datesSet={args => gotoMonth1(args)}
                    />
                </StyleWrapper>

            </div>
        </AppLayout>

    );
};

// export default DemoFullCalendar;