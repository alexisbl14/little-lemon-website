function ConfirmationPage() {

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
                    <h3 className="green-text">Date: Jan 12, 2025</h3>
                    <h3 className="green-text">Time: 17:30</h3>
                    <h3 className="green-text">Number of People: 5</h3>
                    <h3 className="green-text">Occasion: Birthday</h3>
                </div>
            </div>
            <button type="submit" onClick={() => console.log("back to Home button clicked")}><h4 className='black-text'>Back to Home</h4></button>
        </section>
    );
}

export default ConfirmationPage;