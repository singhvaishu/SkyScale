
import React from 'react';
import './home.css';
import heroImage from '../assets/imghome.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="hero-container">
                <img
                    src={heroImage}
                    alt="Hero Image"
                    className="hero-image"
                />
                <div className="hero-content">
                    <h1>Welcome </h1>

                </div>
            </div>
        </div>
    );
};

export default Home;
