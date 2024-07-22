import { useNavigate, useLocation } from "react-router-dom";

function ConfirmationPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const date = location.state.date.split('-');
    const months = ["January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"];
    const month = months[date[1] - 1];

    return (
        <section className="booking-area">
            <div className="heading">
                <h1 className="yellow-text">Book a Table</h1>
                <h2 className="white-text">Thanks for Booking!</h2>
            </div>
            <h4 className="black-text confirmation-text">You will receive an email confirmation shortly.</h4>
            <div className="booking-info-area">
                <h4 className="black-text">Booking Information</h4>
                <div className="booking-info-text">
                    <h3 className="green-text">Date: {month} {date[2]}, {date[0]} </h3>
                    <h3 className="green-text">Time: {location.state.time}</h3>
                    <h3 className="green-text">Number of People: {location.state.numPeople}</h3>
                    <h3 className="green-text">Occasion: {location.state.occasion}</h3>
                </div>
            </div>
            <button type="submit" onClick={() => navigate('/')}><h4 className='black-text'>Back to Home</h4></button>
        </section>
    );
}

export default ConfirmationPage;