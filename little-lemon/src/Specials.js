import SpecialItem from "./SpecialItem";

function Specials(props) {
    return (
        <>
            <div className="specials">
                <h1 className="grid-item black-text">This week's specials!</h1>
                <button className="grid-item" type="button" onClick={() => console.log("button clicked")}><h4 className="black-text">Online Menu</h4></button>
                <SpecialItem item={props.specials[0]} className="grid-item"/>
                <SpecialItem item={props.specials[1]} className="grid-item"/>
                <SpecialItem item={props.specials[2]} className="grid-item"/>
            </div>
        </>
    )
}

export default Specials;