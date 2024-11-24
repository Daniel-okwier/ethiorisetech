import {  useEffect } from 'react'; // Import useEffect

//import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundImage from '../../assets/Images/Download Digital Earth Global Network for free.jpg'; // Importing the image

const Home = () => {

    useEffect(() => {
        document.title = "Home"; // Set the title for About page
    }, []);
    return (
        <section className="home-section">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="overlay">
                    <div className="content">
                        <h1>Transform Your Business</h1>
                        <h2>Your Partner in Innovation</h2>
                        <p>Delivering innovative digital solutions to drive your success.</p>
                        <Link to="/Services" className="cta-button">Explore Our Services</Link> 
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Home;