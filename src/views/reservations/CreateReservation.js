
import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
// import ReactDOM from 'react-dom/client';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";



const sessions = [
    {
        "date": "2023-08-10T00:47:26.000Z",
        "ismorning": true,
        "isevening": true
    },
    {
        "date": "2023-08-11T00:47:26.000Z",
        "ismorning": true,
        "isevening": false
    },
    {
        "date": "2023-08-12T00:47:26.000Z",
        "ismorning": false,
        "isevening": true
    },
    {
        "date": "2023-08-14T00:47:26.000Z",
        "ismorning": true,
        "isevening": true
    },
    {
        "date": "2023-08-15T00:47:26.000Z",
        "ismorning": false,
        "isevening": false
    },
    {
        "date": "2023-08-17T00:47:26.000Z",
        "ismorning": true,
        "isevening": false
    },
    {
        "date": "2023-08-18T00:47:26.000Z",
        "ismorning": false,
        "isevening": true
    },
    {
        "date": "2023-08-21T00:47:26.000Z",
        "ismorning": true,
        "isevening": true
    },
    {
        "date": "2023-08-22T00:47:26.000Z",
        "ismorning": true,
        "isevening": false
    },
    {
        "date": "2023-08-24T00:47:26.000Z",
        "ismorning": false,
        "isevening": true
    },
    {
        "date": "2023-08-25T00:47:26.000Z",
        "ismorning": true,
        "isevening": true
    },
    {
        "date": "2023-08-27T00:47:26.000Z",
        "ismorning": false,
        "isevening": false
    },
    {
        "date": "2023-08-28T00:47:26.000Z",
        "ismorning": true,
        "isevening": false
    },
    {
        "date": "2023-08-31T00:47:26.000Z",
        "ismorning": false,
        "isevening": true
    }
];

export function CreateReservation() {
    const [inputs, setInputs] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [isMorning, setMorning] = useState(false);
    const [isEvening, setEvening] = useState(false);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const nextTwoWeeks = [];
  
    // Generate dates for the next two weeks
    for (let i = 0; i < 14; i++) {
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
        console.log(inputs);

        // alert(inputs.eventname + ": " + inputs.eventdescription
        //     + "\nDate : " + startDate
        //     + "\nSession : " + (inputs.ismorning ? "Morning" : "") + (inputs.isevening ? " Evening" : "")
        // );

        const reservation = {
            name: inputs.eventname,
            description: inputs.eventdescription,
            location: "Hilton",
            date: startDate,
            ismorning: inputs.ismorning,
            isevening: inputs.isevening
        };
        axios.post("http://localhost:3001/calendar", reservation).then((res) => {
            alert("Reservation Success");
            //window.location = "/";//easiest way

            //Add UseNavigate 
            //useNavigate.call('/');
        });

    }

    return (
        <div className='w-full h-screen'>

            <h1>Hilton</h1>
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
                {daysOfWeek[date.getDay()]} - {date.toLocaleDateString('en-US')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Session</td>
            {nextTwoWeeks.map((date, dateIndex) => (
              <React.Fragment key={dateIndex}>
                <td>
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

    // return (
    //   <div className='w-full h-screen'>
    //     <div>Hilton</div>
    //     Reservations :  
    //   </div>
    // );
}