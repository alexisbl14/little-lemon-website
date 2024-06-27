import deliveryIcon from "./delivery-icon.svg";

function SpecialItem(props) {
    return (
        <div className={`${props.className} special-item`}>
            <img src={props.item.img} alt={props.item.name} className="special-img"/>
            <div className="special-info">
                <div>
                    <h6 className="black-text">{props.item.name}</h6>
                    <h5 className="red-text">${(props.item.price).toFixed(2)}</h5>
                </div>
                <p className="green-text">{props.item.description}</p>
                <div>
                    <h5 className="black-text">Order a delivery</h5>
                    <img src={deliveryIcon} alt="Delivery"/>
                </div>
            </div>
        </div>
    )
}

export default SpecialItem;