import SpecialItem from "./SpecialItem";

function Specials() {
    return (
        <>
            <div className="specials">
                <h1 className="grid-item black-text">This week's specials!</h1>
                <button className="grid-item" type="button" onClick={() => console.log("button clicked")}><h4 className="black-text">Online Menu</h4></button>
                <SpecialItem className="grid-item"/>
                <SpecialItem className="grid-item"/>
                <SpecialItem className="grid-item"/>
            </div>
        </>
    )
}

export default Specials;