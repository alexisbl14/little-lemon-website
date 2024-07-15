import backButton from "./backButton.svg";

function BookingForm() {
    return (
        <section className="booking-area">
            <div className="heading">
                <h1 className="yellow-text">Book a Table</h1>
                <h2 className="white-text">Select Date and Time</h2>
            </div>
            <div className="form">
                <img className="back-button" src={backButton} alt="Back" onClick={() => console.log("Back button pressed!")}/>
                <span className="form-entries">
                    <div className="Field">
                        <label htmlFor="date">Date For Reservation:</label>
                        <input type="date" name="date"/>
                    </div>
                    <div className="Field">
                        <label htmlFor="time">Time For Reservation:</label>
                        <select name="time">
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                        </select>
                    </div>
                    <div className="Field">
                        <label htmlFor="numPeople">Number of People:</label>
                        <input type="number" name="numPeople" min="1" max="12" placeholder="1"/>
                    </div>
                    <div className="Field">
                        <label htmlFor="selectedOccasion">Occasion:</label>
                        <select name="selectedOccasion">
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </span>
                <button type="button" onClick={() => console.log("button clicked")}><h4 className='black-text submit-button'>Submit</h4></button>
            </div>
        </section>
    )
}

export default BookingForm;