import { useState } from 'react';
import DatePicker from "react-datepicker";
// import ReactDOM from 'react-dom/client';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export function CreateReservation() {
    const [inputs, setInputs] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [isMorning, setMorning] = useState(false);
    const [isEvening, setEvening] = useState(false);

    // const updateOne = () => setCheckedOne((prev) => !prev);
    // const updateOne = () => setCheckedOne((prev) => !prev);


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
                        checked={isMorning}//{this.state.morning}
                        onChange={checkMorningHandler} />
                </label>
                <label>
                    Evening
                    <input
                        name="isevening"
                        type="checkbox"
                        checked={isEvening}//{this.state.evening}
                        onChange={checkEveningHandler} />
                </label>

                {/* <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label> */}
                <input type="submit" value="Make Appintment" />
            </form>
        </div>
    )

    // return (
    //   <div className='w-full h-screen'>
    //     <div>Hilton</div>
    //     Reservations :  
    //   </div>
    // );
}