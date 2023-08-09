import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
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
    const [reservationData, setReservationData] = useState({});
    //const [sessions, setSessions] = useState([]);

    useEffect(() => {
        allreservations(location.state.company.companyID).then((result) => {
            //console.log("session Data 123 : "+ sessions);
            //setSessions(result);
            // console.log("session Data : "+ sessions);
        });
    }, []);

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const today = new Date();
    let nextTwoWeeks = [];
  
    // Generate dates for the next two weeks
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        nextTwoWeeks.push(date);
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

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const reservationDetails = async (id) => {
        await axios.get("http://localhost:3001/calendar/" + id)
        //.then(response => response.json())
        .then(response => {
            console.log("Data loaded:");     
            setReservationData(response.data);
        })
        .catch(error => {
            console.error('Error loading data:', error);
            return [];
        });;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(sessions);

        // alert(inputs.eventname + ": " + inputs.eventdescription
        //     + "\nDate : " + new Date(startDate)
        //     + "\nSession : " + (inputs.ismorning ? "Morning" : "") + (inputs.isevening ? " Evening" : "")
        // );

        const reservation = {
            name: inputs.eventname,
            description: inputs.eventdescription,
            location: location.state.company.companyName,
            companyid: location.state.company.companyID,
            date: new Date(startDate),
            ismorning: inputs.ismorning,
            isevening: inputs.isevening,
            reservationby: user.email
        };

        console.log("reservation: " + reservation);
        axios
            .post("http://localhost:3001/calendar", reservation)
            .then(async (res) => {
                alert("Reservation Success");
                window.location.reload(false);

            })
            .catch((error) => {
                console.error("Error loading data:", error);
                return [];
            });
    };

    return (
        <div className="m-auto laptop:mt-5 laptop:pt-20 h-screen px-5 flex flex-col bg-black gap-4 tablet:w-1/2 laptop:w-1/3 desktop:1/2">
            {/* <div className="flex mt-2 items-center gap-2 content-center">
        <FaCircle className=" flex-initial text-[#00DFA2] text-lg " />
        <h1 className="font-bold text-4xl text-[#F7E987]">{name}</h1>
      </div>
      <div className="flex  items-center gap-2">
        <FaMapPin className="text-[#00ADB5] flex-initial " />
        <p className="text-white ">123 Broadway, BC</p>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="text-[#00ADB5]" />
        <p className="text-white">9:00 am - 5:00pm</p>
      </div> */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    className="rounded-md border-0 h-8 p-2"
                    type="text"
                    name="eventname"
                    value={inputs.eventname || ""}
                    onChange={handleChange}
                    placeholder="Appointment Reason"
                />
                <input
                    className="rounded-md border-0 h-8 p-2"
                    type="text"
                    name="name"
                    value={inputs.eventname || ""}
                    onChange={handleChange}
                    placeholder="Full name"
                />

                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                <input
                    className="rounded-md border-0 h-8 p-2"
                    type="date"
                    value={startDate}
                    placeholderText="Date"
                    min={startDate}
                    onChange={(event) => {
                        setStartDate(event.target.value);
                    }}
                />

                <div className="border-0 h-8 p-2 text-white flex items-center gap-4">
                    <input
                        name="ismorning"
                        type="checkbox"
                        checked={isMorning}
                        onChange={checkMorningHandler} />
                    <label for="morning" className="text-xl">
                        Morning
                    </label>
                </div>
                <div className="border-0 h-8 p-2 text-white flex items-center gap-4">
                    <input
                        name="isevening"
                        type="checkbox"
                        checked={isEvening}
                        onChange={checkEveningHandler} />
                    <label for="evening" className="text-xl">
                        Evening
                    </label>
                </div>
                <input
                    className="rounded-md border-0 h-20 p-2"
                    type="text"
                    name="eventdescription"
                    value={inputs.eventdescription || ""}
                    onChange={handleChange}
                    placeholder="Extra information"
                />
                <input
                    className="rounded-md text-white font-bold  text-lg border-0 p-2 bg-[#00ADB5]"
                    type="submit"
                    value="Make Appointment"
                />
            </form>
            <br></br>
            <h1>Weekly Timetable</h1>
            <div>
                <table class="table-auto border-separate border border-slate-400 text-white">
                    <thead>
                        <tr>
                            <th class="border border-slate-300 ">Date</th>
                            {nextTwoWeeks.map((date, index) => (
                                <th key={index} colSpan="2">
                                    {daysOfWeek[date.getDay()]}
                                    <br></br>
                                    {date.toLocaleDateString("en-US")}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-slate-300">Session</td>
                            {nextTwoWeeks.map((date, dateIndex) => (
                                <React.Fragment key={dateIndex}>
                                    <td class="border border-slate-300">
                                        {sessions.some(
                                            (session) =>
                                                new Date(session.date).toLocaleDateString("en-US") ===
                                                date.toLocaleDateString("en-US") && session.ismorning
                                        ) ? (
                                            <input
                                                type="button"
                                                onClick={() =>
                                                    reservationDetails(
                                                        sessions.find(
                                                            (session) =>
                                                                new Date(session.date).toLocaleDateString("en-US") ===
                                                                date.toLocaleDateString("en-US") &&
                                                                session.ismorning
                                                        )._id
                                                    )
                                                }
                                                value="Morning"
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td class="border border-slate-300">Session</td>
                            {nextTwoWeeks.map((date, dateIndex) => (
                                <React.Fragment key={dateIndex}>
                                    <td class="border border-slate-300">
                                        {sessions.some(
                                            (session) =>
                                                new Date(session.date).toLocaleDateString("en-US") ===
                                                date.toLocaleDateString("en-US") && session.isevening
                                        ) ? (
                                            <input
                                                type="button"
                                                onClick={() =>
                                                    reservationDetails(
                                                        sessions.find(
                                                            (session) =>
                                                                new Date(session.date).toLocaleDateString("en-US") ===
                                                                date.toLocaleDateString("en-US") &&
                                                                session.isevening
                                                        )._id
                                                    )
                                                }
                                                value="Evening"
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </td>
                                </React.Fragment>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div  class="text-white">
                <label>Appointment : <span>{reservationData.name}</span></label>
                <label>Date : <span>{reservationData.date}</span></label>
                <label>Session : <span>{(reservationData.isMorning && reservationData.isEvening) ? "Full Day" : (reservationData.isMorning) ? "Morning" :  (reservationData.isEvening) ? "Evening" : ""}</span></label>                
                <label>Description : <span>{reservationData.description}</span></label>
                <label>Appointment Created By : <span>{reservationData.reservationby}</span></label>
            </div>
        </div>
    );
}
