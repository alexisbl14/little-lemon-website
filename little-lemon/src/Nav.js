import logo from './logo.svg';
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import { useReducer, useState } from "react";
import Homepage from './Homepage';
import About from './About';
import Menu from './Menu';
import Booking from './Booking';
import Order from './Order';
import Login from './Login';

export const updateTimes = (action) => {
    if(action.date === "") {return []};
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export const initializeTimes = () => {
    return [];
}


function Nav() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    console.log(availableTimes);
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
                <Route path="/reservations" element={<Booking availableTimes={availableTimes} setAvailableTimes={dispatch}/>} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default Nav;