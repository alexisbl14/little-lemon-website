import { useState } from "react";
import backButton from "./backButton.svg";

function BookingForm(props) {

    

    const [date, setDate] = useState("");
    const [time, setTime] = useState(props.availableTimes[0]);
    const [numPeople, setNumPeople] = useState("1");
    const [occasion, setOccasion] = useState("birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!")

        setDate("");
        setTime(props.availableTimes[0]);
        setNumPeople("1");
        setOccasion("birthday");
    }


    return (
        <section className="booking-area">
            <div className="heading">
                <h1 className="yellow-text">Book a Table</h1>
                <h2 className="white-text">Select Date and Time</h2>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <img className="back-button" src={backButton} alt="Back" onClick={() => console.log("Back button pressed!")}/>
                <span className="form-entries">
                    <div className="Field">
                        <label htmlFor="date">Date For Reservation:</label>
                        <input type="date" name="date" id="date" value={date} onChange={e => {
                            setDate(e.target.value);
                            props.setAvailableTimes({date: e.target.value});
                            }}/>
                    </div>
                    <div className="Field">
                        <label htmlFor="time">Time For Reservation:</label>
                        <select name="time" id="time" value={time} onChange={e => setTime(e.target.value)}>
                            {props.availableTimes.map((time) => {
                                return <option key={time} value={time}>{time}</option>
                            })}
                        </select>
                    </div>
                    <div className="Field">
                        <label htmlFor="numPeople">Number of People:</label>
                        <input type="number" name="numPeople" id="numPeople" min="1" max="12" value={numPeople} onChange={e => setNumPeople(e.target.value)}/>
                    </div>
                    <div className="Field">
                        <label htmlFor="selectedOccasion">Occasion:</label>
                        <select name="selectedOccasion" id="selectedOccasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </span>
                <button type="submit" onClick={() => console.log("submit button clicked")}><h4 className='black-text submit-button'>Submit</h4></button>
            </form>
        </section>
    )
}

export default BookingForm;