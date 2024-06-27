function RatingCard(props) {
    return (
        <div className="rating-card">
            <h5 className="black-text">Rating:  {props.review.rating}/5</h5>
            <h5 className="black-text">{props.review.name}</h5>
            <p className="green-text">{props.review.notes}</p>
        </div>
    )
}

export default RatingCard;