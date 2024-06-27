import marioAndAdrian from "./mario-and-adrian.svg";
import chef from "./chef.svg";

function Chicago() {
    return (
        <section className="chicago">
            <div className="chicago-body">
                <h1 className="black-text">Little Lemon</h1>
                <h2 className="green-text">Chicago</h2>
                <h3 className="green-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit 
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </h3>
            </div>
            <div className="chicago-img">
                <img src={marioAndAdrian} alt="Mario and Adrian"/>
                <img src={chef} alt="Chef"/>
            </div>
        </section>
    )
}

export default Chicago;