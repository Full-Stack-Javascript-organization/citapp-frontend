
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
// import ReactDOM from 'react-dom/client';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useLocale } from 'antd/es/locale';
import { useLocation } from 'react-router-dom';


let sessions = [];


const allreservations = async (id) => {
    await axios.get("http://localhost:3001/calendar/search?companyid=" + id)
        //.then(response => response.json())
        .then(response => {
            console.log("Data loaded:");
            response.data.forEach((item, index) => {
                console.log(`Item ${index}:`, item);
                sessions.push(item);
            });

            // sessions = [...sessions];
            console.log("session Data : " + sessions);
            return sessions;
        })
        .catch(error => {
            console.error('Error loading data:', error);
            return [];
        });;
}



export function CreateReservation(prop) {
    const location = useLocation();
    console.log(location.state.company.companyID);

    const { logout, user } = useAuth();
    const [inputs, setInputs] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [isMorning, setMorning] = useState(false);
    const [isEvening, setEvening] = useState(false);
    //const [sessions, setSessions] = useState([]);

    useEffect(() => {
        allreservations(location.state.company.companyID).then(result => {
            //console.log("session Data 123 : "+ sessions);
            //setSessions(result);
            // console.log("session Data : "+ sessions);
        });

    }, []);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    let nextTwoWeeks = [];

    // Generate dates for the next two weeks
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        nextTwoWeeks.push(date);
    }
    /////////////////////////////////////////////


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const checkMorningHandler = (event) => {
        setMorning(!isMorning);
        console.log(event.target.name + " : " + event.target.value + " : " + isMorning);
        const name = event.target.name;
        const value = !isMorning
        setInputs(values => ({ ...values, [name]: value }));
    }

    const checkEveningHandler = (event) => {
        setEvening(!isEvening);
        const name = event.target.name;
        const value = !isEvening;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(sessions);


        // alert(inputs.eventname + ": " + inputs.eventdescription
        //     + "\nDate : " + startDate
        //     + "\nSession : " + (inputs.ismorning ? "Morning" : "") + (inputs.isevening ? " Evening" : "")
        // );

        const reservation = {
            name: inputs.eventname,
            description: inputs.eventdescription,
            location: location.state.company.companyName,
            companyid: location.state.company.companyID,
            date: startDate,
            ismorning: inputs.ismorning,
            isevening: inputs.isevening,
            reservationby: user.email
        };
        axios.post("http://localhost:3001/calendar", reservation).then(async (res) => {
            window.location.reload(false);
        })
            .catch(error => {
                console.error('Error loading data:', error);
                return [];
            });

    }


    return (
        <div className='w-full h-screen'>

            <h1>{location.state.company.companyName}</h1>
            <form onSubmit={handleSubmit}>
                <label>Event Name:
                    <input
                        type="text"
                        name="eventname"
                        value={inputs.eventname || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>Event Description:
                    <input
                        type="text"
                        name="eventdescription"
                        value={inputs.eventdescription || ""}
                        onChange={handleChange}
                    />
                </label>

                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <label>
                    Morning
                    <input
                        name="ismorning"
                        type="checkbox"
                        checked={isMorning}
                        onChange={checkMorningHandler} />
                </label>
                <label>
                    Evening
                    <input
                        name="isevening"
                        type="checkbox"
                        checked={isEvening}
                        onChange={checkEveningHandler} />
                </label>


                <input type="submit" value="Make Appintment" />

            </form>
            <br></br>
            <h1>Weekly Timetable</h1>
            <div>
                <h1>Timetable for the Next Two Weeks</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            {nextTwoWeeks.map((date, index) => (
                                <th key={index} colSpan="2">
                                    {daysOfWeek[date.getDay()]}<br></br>
                                    {date.toLocaleDateString('en-US')}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >Session</td>
                            {nextTwoWeeks.map((date, dateIndex) => (
                                <React.Fragment key={dateIndex}>
                                    <td >
                                        {sessions.some(
                                            (session) =>
                                                new Date(session.date).toLocaleDateString('en-US') ===
                                                date.toLocaleDateString('en-US') && session.ismorning
                                        )
                                            ? 'Morning'
                                            : ''}
                                    </td>

                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td>Session</td>
                            {nextTwoWeeks.map((date, dateIndex) => (
                                <React.Fragment key={dateIndex}>
                                    <td>
                                        {sessions.some(
                                            (session) =>
                                                new Date(session.date).toLocaleDateString('en-US') ===
                                                date.toLocaleDateString('en-US') && session.isevening
                                        )
                                            ? 'Evening'
                                            : ''}
                                    </td>
                                </React.Fragment>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}