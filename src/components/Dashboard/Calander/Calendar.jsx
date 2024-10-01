import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar({ appointment }) {
    // const [eventsData, setEventsData] = useState([]);
    // for (const event of appointment) {
    let eventsData = appointment.map(event => ({
        title: event.username,
        start: new Date(event.date),
        end: new Date(event.date),
        desc: event.username,
    }))
    // }

    const handleSelect = ({ start, end }) => {
        // console.log(start);
        // console.log(end);
        // const title = window.prompt("New Event name");
        // if (title)
        //     setEventsData([
        //         ...eventsData,
        //         {
        //             start,
        //             end,
        //             title,
        //         }
        //     ]);
    };
    return (
        <div className="App">
            <Calendar
                views={["day", "month"]}
                selectable
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="day"
                events={eventsData}
                style={{
                    height: "100vh",
                    color: "pink"
                }}
                onSelectEvent={(event) => alert(event.title)}
                onSelectSlot={handleSelect}
            />
        </div>
    );
}
