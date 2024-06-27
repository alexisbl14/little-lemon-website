import React from 'react';
import heroImg from './hero-img.svg';
import './App.css';

function Hero() {
    return (
        <section>
            <div className='hero'>
                <div className='hero-body'>
                    <div>
                        <h1 className='yellow-text'>Little Lemon</h1>
                        <h2 className='white-text'>Chicago</h2>
                    </div>
                    <h3 className='white-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
                    <button type="button" onClick={() => console.log("button clicked")}><h4 className='black-text'>Reserve a Table</h4></button>
                </div>
                <img src={heroImg} alt="Hero" className='hero-img'/>
            </div>
        </section>
    )
}

export default Hero;