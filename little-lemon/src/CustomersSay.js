import RatingCard from "./RatingCard";

function CustomersSay(props) {

    return (
        <section className="customers-say">
            <h1 className="yellow-text">Testimonials</h1>
            <div>
                <RatingCard review={props.reviews[0]}/>
                <RatingCard review={props.reviews[1]}/>
                <RatingCard review={props.reviews[2]}/>
                <RatingCard review={props.reviews[3]}/>
            </div>
        </section>
    )
}

export default CustomersSay;