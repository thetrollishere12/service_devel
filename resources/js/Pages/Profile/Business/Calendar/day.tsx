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

import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
import "react-calendar/dist/Calendar.css";
import { duration } from "moment";

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
.fc-selectTeamMember-button.fc-button.fc-button-primary,.fc-dayEventButton-button.fc-button.fc-button-primary,.fc-monthEventButton-button.fc-button.fc-button-primary{
    background: #ffffff00;
    color: black;
}
.fc-dayEventButton-button.fc-button.fc-button-primary,.fc-monthEventButton-button.fc-button.fc-button-primary{
    width: 70px;
}
.fc-dayEventButton-button.fc-button.fc-button-primary,.fc-monthEventButton-button.fc-button.fc-button-primary.fc-button-active{
    color: orange;
}
.fc-toolbar h2 {
  display: inline;
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
    console.log("customEvent", event);
    console.log("customEventCurrentData", event.event.toPlainObject());
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

    const { appointments } = usePage().props


    const startDate = new Date();
    const endDate = new Date();
    const endDate2 = new Date();
    endDate2.setHours(2);
    endDate.setHours(24);

    const form = useForm({
        event: [],
    });

    var events: any[] = [];

    appointments.map((data, i) => {
        events[i] = {
            start: data.start_date,
            end: data.end_date,
            allday: false
        }
    })

    //Get an event by its ID once the calendar has loaded
    useEffect(() => {
        //@ts-ignore
        const calendarApi = calendarRef?.current?.getApi();
        const event = calendarApi.getEventById("a");
        // console.log(JSON.stringify(event));
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
        // form.get('/user/business/day', {
        //     onFinish: () => form.reset(),
        // });
    };

    const toMonth = () => {
        form.get('/user/appointment/calendar', {
            onFinish: () => form.reset(),
        });
    };

    const selectTeam = () => {

    };

    const customButtons = {
        addEventButton: {
            text: "Add New",
            click: addEvent
        },
        selectTeamMember: {
            text: "Select Team Member",
            click: selectTeam
        },
        dayEventButton: {
            text: "Day",
            click: toDay
        },
        monthEventButton: {
            text: "Month",
            click: toMonth
        }
    };

    const [canDragToMove, setCanDragToMove] = useState<boolean>(true);
    const handleCanDragToMove = () => {
        setCanDragToMove(!canDragToMove);
    };

    const [canDragToCreate, setCanDragToCreate] = useState<boolean>(true);
    const handleCanDragToCreate = () => {
        setCanDragToCreate(!canDragToCreate);
    };

    const selectCallback = (data) => {

        let title = prompt("Please enter a new title for your event");
        let calendarApi = data.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: 1,
                title,
                start: data.startStr,
                end: data.endStr,
                allDay: data.allDay
            });
        }
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

    const dayClick = (data) => {
        //@ts-ignore
        console.log(data);
        const calendarApi = calendarRef?.current?.getApi();
        calendarApi.gotoDate(data);
    }

    return (
        <AppLayout title="day">
            <BusinessLeftNav />
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="row-span-2 col-span-2 pl-36 pt-36">
                    <Calendar
                        onClickDay={dayClick}
                    />
                </div>
                <div className="row-span-6 col-span-10 pr-16">
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
                            slotDuration={{ hours: 0.25 }}
                            eventStartEditable={canDragToMove}
                            eventDurationEditable={canDragToMove}
                            ref={calendarRef}
                            eventContent={customEventContent}
                            eventClick={handleEventClick}
                            events={events}
                            headerToolbar={{
                                start: "addEventButton selectTeamMember", // will normally be on the left. if RTL, will be on the right
                                center: "prev,title,next", // will normally be on the right. if RTL, will be on the left
                                end: "dayEventButton monthEventButton",
                            }}
                            plugins={[
                                dayGridPlugin,
                                timeGridPlugin,
                                customViewPlugin,
                                interactionPlugin
                            ]}
                            initialView="timeGridDay"
                            views={customViews}
                        />
                    </StyleWrapper>


                </div>
            </div>
        </AppLayout>

    );
};

// export default DemoFullCalendar;