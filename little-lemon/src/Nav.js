import logo from './logo.svg';
import "./App.css";

function Nav() {
    return(
        <nav>
            <ul className="nav">
                <li><a href="./Home"><img src={logo} alt="Logo"/></a></li>
                <li><a href="./Home"><h3 className="black-text">Home</h3></a></li>
                <li><a href="./About"><h3 className="black-text">About</h3></a></li>
                <li><a href="./Menu"><h3 className="black-text">Menu</h3></a></li>
                <li><a href="./Reservations"><h3 className="black-text">Reservations</h3></a></li>
                <li><a href="./Order"><h3 className="black-text">Order Online</h3></a></li>
                <li><a href="./Login"><h3 className="black-text">Login</h3></a></li>
            </ul>
        </nav>
    )
}

export default Nav;