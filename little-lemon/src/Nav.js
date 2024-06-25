import logo from './logo.svg';
import "./App.css";

function Nav() {
    return(
        <nav>
            <ul className="nav">
                <li><a href="./Home"><img src={logo} alt="Logo"/></a></li>
                <li><a href="./Home">Home</a></li>
                <li><a href="./About">About</a></li>
                <li><a href="./Menu">Menu</a></li>
                <li><a href="./Reservations">Reservations</a></li>
                <li><a href="./Order">Order Online</a></li>
                <li><a href="./Login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;