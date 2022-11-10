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
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Checkbox
} from "@material-tailwind/react";
import "react-calendar/dist/Calendar.css";
import { duration } from "moment";
import { isNumber } from "lodash";

export const StyleWrapper = styled.div`
.fc-addEventButton-button.fc-button.fc-button-primary{
    background: #172153;
}  
.fc-customnext-button.fc-button.fc-button-primary,.fc-customprev-button.fc-button.fc-button-primary{
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
.fc-timegrid-event-harness.fc-timegrid-event-harness-inset{
    width: ${props => props.staff_cnt && 100 / props.staff_cnt + "%"};
}
// .fc-timegrid-event-harness.fc-timegrid-event-harness-inset:nth-of-type(1){
//     // inset: 200px 0% -250px 50%;
//     position: absolute;
//     top: 200px;
//   right: 0;
//   bottom: -250px;
//   left: 50%;
// }
table{
    width: -webkit-fill-available;
}
// .fc-header-toolbar.fc-toolbar {
//     position: fixed;    
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
// }
.fc-toolbar-chunk {
    display: flex;
    justify-content: center;
}
.fc-view-harness.fc-view-harness-active{
    margin-top: 50px;
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

    var { appointments, day } = usePage().props

    var now = new Date(day);
    const offset = now.getTimezoneOffset()
    now = new Date(now.getTime() + (offset * 60 * 1000));
    const [initDate, setInitDate] = useState(new Date(now));
    const [avatargap, setAvatargap] = useState(0);

    const startDate = new Date();
    const endDate = new Date();
    const endDate2 = new Date();
    endDate2.setHours(2);
    endDate.setHours(24);

    const form = useForm({
        event: [],
    });

    var events: any[] = [];
    var staffJson: {} = {};
    var staff: any[] = [];
    var staff_cnt = 0;
    // var avatargap = 0;

    appointments.map((data, i) => {
        events[i] = {
            start: data.start_date,
            end: data.end_date,
            allday: false,
            title: data.name
        }
        staffJson[`${data.staff_id}`] = data;
    })


    for (var sta in staffJson) {
        staff[staff_cnt] = staffJson[`${sta}`];
        staff_cnt++;
    }

    //Get an event by its ID once the calendar has loaded
    useEffect(() => {
        //@ts-ignore
        const calendarApi = calendarRef?.current?.getApi();
        calendarApi.gotoDate(day);
        const event = calendarApi.getEventById("a");

        var tablew = document.getElementsByClassName("fc-timegrid fc-timeGridDay-view fc-view");
        if (staff.length > 8) {
            tablew[0].style.width = `${staff.length * 12.5}%`;
        }

        var ava = document.getElementsByClassName("fc-col-header");
        setAvatargap(ava[0]?.clientWidth / 4);

        const newNode = document.createElement("div");
        newNode.className = "grid";
        newNode.style = `grid-template-columns: 1fr 1fr 1fr 1fr; width:${staff.length > 8 && staff.length * 12.5}%`;

        // Create a text node:
        staff.map(data => {
            const node = document.createElement("div");
            node.innerHTML = `<div class="grid flex-wrap justify-center"><img src = "https://mdbootstrap.com/img/new/standard/city/041.jpg" class = "w-16 h-16 bg-white border max-w-sm rounded-full" alt = "..." />${data.name} </div >`
            newNode.appendChild(node);
        })
        const list = document.getElementsByClassName("fc fc-media-screen fc-direction-ltr fc-theme-standard");
        list[0].insertBefore(newNode, list[0].children[1]);


        const styleSheetContent = `
            .fc-timegrid-event-harness.fc-timegrid-event-harness-inset{
                width:${100 / staff.length}%;
            }
        `;

        if (!document.querySelectorAll(".fc-timegrid-event-harness.fc-timegrid-event-harness-inset")) {
            var head = document.head || document.getElementsByTagName("head")[0];
            console.log(head);
            head.appendChild(createStyleElement(id, content));
        }
    }, []);

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
        // const calendarApi = calendarRef?.current?.getApi();
        // var to = customizeMonth(calendarApi?.getCurrentData().viewTitle);
        form.get(`/user/appointment/month/`, { //${to}
            onFinish: () => form.reset(),
        });
    };

    const customizeMonth = (data: String) => {
        let array = data.split(/,| /);
        let month = { "January": "01", "February": "02", "March": "03", "April": "04", "May": "05", "June": "06", "July": "07", "August": "08", "September": "09", "October": "10", "November": "11", "December": "12" };
        let res: String = "";
        // if (parseInt(array[1]) < 10) array[1] = "0" + array[1];
        res = array[3] + "-" + month[array[0]];
        // console.log(res);
        return res;
    }

    const customizeDay = (data: String) => {
        let array = data.split(/,| /);
        let month = { "January": "01", "February": "02", "March": "03", "April": "04", "May": "05", "June": "06", "July": "07", "August": "08", "September": "09", "October": "10", "November": "11", "December": "12" };
        let res: String = "";
        if (parseInt(array[1]) < 10) array[1] = "0" + array[1];
        res = array[3] + "-" + month[array[0]] + "-" + array[1];
        // console.log(res);
        return res;
    }

    const prevDay = () => {
        const calendarApi = calendarRef?.current?.getApi();
        calendarApi.prev();
        var to = customizeDay(calendarApi?.getCurrentData().viewTitle);
        form.get(`/user/appointment/day/${to}`, {
            onFinish: () => form.reset(),
        });
    };

    const nextDay = () => {

        const calendarApi = calendarRef?.current?.getApi();
        calendarApi.next();
        var to = customizeDay(calendarApi?.getCurrentData().viewTitle);
        form.get(`/user/appointment/day/${to}`, {
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
        },
        customprev: {
            text: "<",
            click: prevDay
        },
        customnext: {
            text: ">",
            click: nextDay
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
        // console.log(data);
        const calendarApi = calendarRef?.current?.getApi();
        calendarApi.gotoDate(data);
        setInitDate(data);
        form.get(`/user/appointment/day/${data.toISOString().split('T')[0]}`, {
            onFinish: () => form.reset(),
        });
    }

    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [checkH, setCheckH] = useState(true);
    const [checkT, setCheckT] = useState(true);
    const [checkC, setCheckC] = useState(false);
    const [checkU, setCheckU] = useState(true);

    const changePos = () => {
        var evenw = document.querySelectorAll(".fc-timegrid-event-harness.fc-timegrid-event-harness-inset");
        if (evenw.length != 0) {
            for (var ins = 0; ins < evenw.length; ins++) {
                staff.map((sta, index) => {
                    if (evenw[ins].innerText.indexOf(sta.name) != -1) {

                        // if (evenw[ins].style.getPropertyValue("inset") != "")
                        // evenw[ins].style.setProperty('inset', evenw[ins].style?.inset.replace("0%", "" + 100 / staff.length * index + "%"));
                        if (evenw[ins].style.inset != "") {
                            var tmp = evenw[ins].style?.inset.replace("0%", "" + 100 / staff.length * index + "%");
                            var inse = tmp.split(" ");
                            var righ = "" + 100 / staff.length * index + "%";
                            evenw[ins].style.inset = inse[0] + " " + righ + " " + inse[2];
                        }
                        // if (evenw[ins].style.inset != "")
                        //     evenw[ins].style.right = "" + 100 / staff.length * index + "%";
                        // const myStyles = `
                        //     top: ${inse[0]};
                        //     right: ${inse[1]};
                        //     bottom: ${inse[2]};
                        //     left: ${inse[3]};
                        // `;
                        // evenw[ins].style.cssText = myStyles;
                    }
                })
            }
            // for (var data in evenw) {
            //     if (isNumber(parseInt(data))) {
            //         staff.map((sta, index) => {
            //             if (evenw[`${data}`].innerText?.indexOf(sta.name) != -1) {
            //                 if (evenw[`${data}`].style)
            //                     evenw[`${data}`].style.inset = evenw[`${data}`].style?.inset.replace("0%", "" + 100 / staff.length * index + "%");
            //             }
            //         })
            //     }
            // }
        }
    }

    return (
        <AppLayout title="day">
            <BusinessLeftNav />
            <div className="grid grid-rows-2 grid-flow-col gap-4" >
                <div className="row-span-2 col-span-2 pl-36 pt-36">
                    <Calendar
                        onClickDay={dayClick}
                        value={initDate}
                    />
                    <Accordion open={open1} style={{ maxWidth: "348px" }}>
                        <AccordionHeader onClick={() => setOpen1(!open1)}>
                            My Calendars
                        </AccordionHeader>
                        {/* <AccordionBody> */}
                        <div className={`${!open1 && 'hidden'}`}>
                            <Checkbox label="Home" onClick={() => setCheckH(!checkH)} className="text-orange-400" checked={checkH} /><br />
                            <Checkbox label="Tasks" onClick={() => setCheckT(!checkT)} checked={checkT} />
                        </div>
                        {/* </AccordionBody> */}
                    </Accordion>
                    <Accordion open={open2} style={{ maxWidth: "348px" }}>
                        <AccordionHeader onClick={() => setOpen2(!open2)}>
                            Others Caledars
                        </AccordionHeader>
                        <div className={`${!open2 && 'hidden'}`}>
                            <Checkbox label="Contacts" onClick={() => setCheckC(!checkC)} checked={checkC} /><br />
                            <Checkbox label="Holiday in United States" onClick={() => setCheckU(!checkU)} className="text-gray-400" checked={checkU} />
                        </div>
                    </Accordion>
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

                    <StyleWrapper
                        staff_cnt={staff_cnt}
                    >

                        <FullCalendar

                            customButtons={customButtons}
                            editable={canDragToMove}
                            selectable={canDragToCreate}
                            // select={selectCallback}
                            slotDuration={{ hours: 0.25 }}
                            eventStartEditable={canDragToMove}
                            eventDurationEditable={canDragToMove}
                            ref={calendarRef}
                            eventContent={customEventContent}
                            eventClick={handleEventClick}
                            events={events}
                            headerToolbar={{
                                start: "addEventButton selectTeamMember", // will normally be on the left. if RTL, will be on the right
                                center: "customprev,title,customnext", // will normally be on the right. if RTL, will be on the left
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
                            eventDidMount={changePos}
                        />
                    </StyleWrapper>


                </div>
            </div >
        </AppLayout >

    );
};

// export default DemoFullCalendar;