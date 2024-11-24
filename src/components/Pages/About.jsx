//import React from 'react';
import {  useEffect } from 'react'; // Import useEffect
import './About.css'; // Make sure to create this CSS file
import aboutImage from '../../assets/Images/Digital Marketing.gif'; // Adjust path as necessary

function About() {

    
        useEffect(() => {
            document.title = "About Us"; // Set the title for About page
        }, []);
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="image-section">
                    <img src={aboutImage} alt="About Us" />
                </div>
                <div className="text-section">
                    <h1>About Us</h1>
                    <p>
                    Our mission is to harness innovative digital solutions to address a wide range of existing challenges. We believe in the transformative power of technology to empower individuals and organizations to overcome obstacles and achieve their goals.
                    </p>
                    <p>
                    With a dedicated team of professionals, we offer 24/7 access to essential resources and support, ensuring you have the tools you need to tackle problems effectively, whenever they arise.
                    </p>
                    <p>
                        Our commitment to innovation and excellence drives us to
                        continuously improve our services and meet the evolving
                        needs of our community.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;