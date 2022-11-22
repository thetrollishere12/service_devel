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
export const SmallStyleWrapper = styled.div`
.react-calendar__tile--active {
    background: #ffa500;
    color: white;
    border-radius: 999999px;
}
.react-calendar__tile.react-calendar__month-view__days__day{
    font-size: 15px;
}
.react-calendar__month-view__days__day--weekend {
    color: orange;
}
.react-calendar__tile--active{
    color: white !important;
}
`

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
    border-color: orange;
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
.fc-timegrid-slots table{
	margin-top: 10px;
	margin-bottom: 80px;
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
    margin-top: 30px;
}
.fc-timegrid-event.fc-v-event.fc-event.fc-event-start.fc-event-end.fc-event-future{
    border-left: 10px solid orange;
    background-color: white;
    box-shadow: 2px 2px 2px 2px #c9ccd1;
    margin-left: 15px;
}
.fc-timegrid-event.fc-v-event.fc-event.fc-event-start.fc-event-end.fc-event-past{
    border-left: 10px solid gray;
    background-color: 	#F0F0F0;
    box-shadow: 2px 2px 2px 2px #c9ccd1;
    // margin-left: 15px;
}
.fc-v-event {
    border: 1px solid #fbfbfb;
    // background-color: white;
    color: black;
}
.fc-event-main {
    color: black;
}
.fc-scrollgrid-section.fc-scrollgrid-section-body:first-of-type{
    display : none;
}
tr{
    height: 80px;
}
.fc-timegrid-slot-label-cushion.fc-scrollgrid-shrink-cushion{
    position: relative;
    top: -40px;
    background-color: #f3f4f6;
    width: 58px;
    font-size: small;
}
.fc-scrollgrid-section.fc-scrollgrid-section-header{
	display: none;
}
.fc-timegrid-divider.fc-cell-shaded{
    display: none;
}
.forceline::after{
    position: absolute;
    width: 1px;
    height: 100vh;
    backgourd-color: black;
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
    const onepagecount = 4; //for multi staff const so if you want change the staff's width only change it

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
    var col_template = "";

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
        col_template += "1fr "
    }

    //Get an event by its ID once the calendar has loaded
    useEffect(() => {
        //@ts-ignore
        const calendarApi = calendarRef?.current?.getApi();
        calendarApi.gotoDate(day);
        const event = calendarApi.getEventById("a");

        var tablew = document.getElementsByClassName("fc-timegrid fc-timeGridDay-view fc-view");
        tablew[0].style.overflowX = "auto";
        tablew[0].style.overflowY = "hidden";
        if (staff.length > onepagecount) {
            tablew[0].firstElementChild.style.width = `${staff.length * 100 / onepagecount}%`;
            // tablew[0].style.width = `${staff.length * 100 / onepagecount}%`;
        }

        var ava = document.getElementsByClassName("fc-col-header");
        setAvatargap(ava[0]?.clientWidth / 4);

        const newNode = document.createElement("div");

        newNode.className = "grid pb-4 pl-4";
        newNode.style = `grid-template-columns: ${col_template}; width:${staff.length > onepagecount && staff.length * 100 / onepagecount}%`;

        // Create a text node:
        staff.map(data => {
            const node = document.createElement("div");
            node.innerHTML = `<div class="flex flex-wrap justify-end forceline"><img src = "https://mdbootstrap.com/img/new/standard/city/041.jpg" class = "w-16 h-16 bg-white border max-w-sm rounded-full" alt = "..." /><div class="pl-4 flex justify-end">${data.name}<br/>64hr<div style="width:1px; position: absolute; height: 1000vh; background-color: #dddddd; top: 80px;"></div></div></div >`
            newNode.appendChild(node);
        })
        const list = document.getElementsByClassName("fc-timegrid fc-timeGridDay-view fc-view");
        list[0].insertBefore(newNode, list[0].children[0]);


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

		const newTr = document.createElement('tr');
		newTr.style = "height: 0px";
		
		const trlist = document.getElementsByClassName("fc-timegrid-slots");
		trlist[0].firstElementChild.lastElementChild.insertBefore(newTr, trlist[0].firstElementChild.lastElementChild.children[0]);

    }, []);

    const customViews = {
        timeGridFourDay: {
            type: "timeGrid",
            duration: { days: 2 },
            buttonText: "4 day",
            eventContent: { customEventContent }
        },
        titleFormat: { // will produce something like "Tuesday, September 18, 2018"
            month: 'short',
            year: 'numeric',
            day: '2-digit',
            weekday: 'short'
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
        let month = { "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12" };
        let res: String = "";
        if (parseInt(array[3]) < 10) array[3] = "0" + array[3];
        res = array[5] + "-" + month[array[2]] + "-" + array[3];
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

    const [canDragToMove, setCanDragToMove] = useState<boolean>(false);
    const handleCanDragToMove = () => {
        setCanDragToMove(!canDragToMove);
    };

    const [canDragToCreate, setCanDragToCreate] = useState<boolean>(false);
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
        console.error("here------------");
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month1 = ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var evenw = document.querySelectorAll(".fc-timegrid-event-harness.fc-timegrid-event-harness-inset");
        var isdayornight = document.querySelectorAll(".fc-timegrid-slot-label-cushion.fc-scrollgrid-shrink-cushion");
        var reactcalendar = document.querySelectorAll(".react-calendar");
        var reactcalendarnavi = document.querySelectorAll(".react-calendar__navigation");
        var abbr = document.querySelectorAll(".react-calendar__month-view__weekdays__weekday");

        if (abbr.length != 0) {
            for (var ia = 0; ia < abbr.length; ia++) {
                abbr[ia].firstElementChild.style.textDecorationLine = "none";
            }
        }

        // reactcalendarnavi[0].innerHTML = month[now.getMonth()];
        // reactcalendarnavi[0].style.fontWeight = "bold";
        // reactcalendarnavi[0].style.fontSize = "larger";
        // reactcalendarnavi[0].style.alignItems = "center";
        // reactcalendarnavi[0].style.justifyContent = "center";
        // reactcalendarnavi[0].style.paddingLeft = "15px";

        reactcalendar[0].style.border = "none";
        reactcalendar[0].style.background = "#f3f4f6";

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
        if (isdayornight.length != 0) {
            for (var inss = 0; inss < isdayornight.length; inss++) {
                isdayornight[inss].innerText = isdayornight[inss].innerText.replace("am", " AM");
                isdayornight[inss].innerText = isdayornight[inss].innerText.replace("pm", " PM");
                // if (isdayornight[inss].innerText.indexOf('am') != -1) {
                //     let tm = isdayornight[inss].innerText;
                //     tm = tm.replace("am", "");
                //     if (parseInt(tm) < 10) {
                //         isdayornight[inss].innerText = tm + " AM";//"0"+
                //     } else {
                //         isdayornight[inss].innerText = tm + " AM";
                //     }
                // } else if (isdayornight[inss].innerText.indexOf('pm') != -1) {
                //     let tm = isdayornight[inss].innerText;
                //     tm = tm.replace("pm", "");
                //     if (parseInt(tm) < 10) {
                //         isdayornight[inss].innerText = tm + " PM";//"0"+
                //     } else {
                //         isdayornight[inss].innerText = tm + " PM";
                //     }
                // }
            }
        }

        // title[0].innerHTML = weekday[now.getDay()] + ", " + now.getDate() + ", " + month1[now.getMonth()] + " " + now.getFullYear();
    }

    return (
        <AppLayout title="day">
            <BusinessLeftNav />
            <div className="grid grid-rows-2 grid-flow-col gap-4" >
                <div className="row-span-2 col-span-2 pl-36 pt-36">
                    <SmallStyleWrapper>
                        <Calendar
                            onClickDay={dayClick}
                            value={initDate}
                            calendarType='US'
                        />
                    </SmallStyleWrapper>
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
                            slotDuration={{ hours: 1 }}
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
                            titleFormat={{
                                weekday: "short",
                                month: "short",
                                year: "numeric",
                                day: "numeric"
                            }}
                            // componentDidMount={changePos}
                            viewDidMount={changePos}
                        />
                    </StyleWrapper>


                </div>
            </div >
        </AppLayout >

    );
};

// export default DemoFullCalendar;