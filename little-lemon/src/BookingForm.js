import backButton from "./backButton.svg";

function BookingForm() {
    return (
        <section className="booking-area">
            <div className="heading">
                <h1 className="yellow-text">Book a Table</h1>
                <h2 className="white-text">Select Date and Time</h2>
            </div>
            <img src={backButton} alt="Back" onClick={() => console.log("Back button pressed!")}/>
            <span className="form-entries">
                <div className="Field">
                    <h4>Date For Reservation:</h4>
                    <input type="date" name="date"/>
                </div>
                <div className="Field">
                    <h4>Time For Reservation:</h4>
                    <input type="time" name="time"/>
                </div>
                <div className="Field">
                    <h4>Number of People:</h4>
                    <input type="number" name="numPeople" min="1" max="12"/>
                </div>
                <div className="Field">
                    <h4>Occasion:</h4>
                    <select name="selectedOccasion" value="birthday">
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                
            </span>
        </section>
    )
}

export default BookingForm;