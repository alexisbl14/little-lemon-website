import BookingForm from "./BookingForm";

function Booking(props) {
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes}/>
        </>
    )
}

export default Booking;