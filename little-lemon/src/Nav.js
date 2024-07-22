import logo from './logo.svg';
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import { useReducer } from "react";
import Homepage from './Homepage';
import About from './About';
import Menu from './Menu';
import Booking from './Booking';
import Order from './Order';
import Login from './Login';
import ConfirmationPage from './ConfirmationPage';
import { fetchAPI, submitAPI } from './bookingAPI';

export const updateTimes = (state, action) => {
    const date = new Date(action.date.replace(/-/g, '/'));
    if(action.date === "") {return fetchAPI(new Date())};
    return fetchAPI(date);
}

export const initializeTimes = () => {
    const date = new Date();
    return fetchAPI(date);
}


function Nav() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <div>
            <nav>
                <ul className="nav">
                    <li><Link to="/" className="nav-item"><img src={logo} alt="Logo"/></Link></li>
                    <li><Link to="/"><h3 className="nav-item black-text">Home</h3></Link></li>
                    <li><Link to="/about"><h3 className="nav-item black-text">About</h3></Link></li>
                    <li><Link to="/menu"><h3 className="nav-item black-text">Menu</h3></Link></li>
                    <li><Link to="/reservations"><h3 className="nav-item black-text">Reservations</h3></Link></li>
                    <li><Link to="/order"><h3 className="nav-item black-text">Order Online</h3></Link></li>
                    <li><Link to="/login"><h3 className="nav-item black-text">Login</h3></Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Booking availableTimes={availableTimes} setAvailableTimes={dispatch} submitForm={submitAPI}/>} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reservations/confirmation" element={<ConfirmationPage/>} />
            </Routes>
        </div>
    )
}

export default Nav;