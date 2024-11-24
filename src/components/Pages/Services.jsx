//import React from 'react';
import {  useEffect } from 'react'; // Import useEffect

import './Services.css'; // Ensure this CSS file exists
import webDevelopmentImage from '../../assets/Images/web.jpg'; // Adjust path as necessary
import webAppImage from '../../assets/Images/webapp.jpg'; // Adjust path as necessary
import systemDevelopmentImage from '../../assets/Images/system.jpg'; // Adjust path as necessary

const servicesData = [
    {
        id: 1,
        title: 'Website Development',
        description: 'Create stunning, responsive websites tailored to your business needs with the latest technologies and best practices.',
        image: webDevelopmentImage,
    },
    {
        id: 2,
        title: 'Web App Development',
        description: 'Develop robust web applications that deliver seamless user experiences and meet complex business requirements.',
        image: webAppImage,
    },
    {
        id: 3,
        title: 'System Development',
        description: 'Design and implement custom systems that streamline operations and enhance productivity across your organization.',
        image: systemDevelopmentImage,
    },
];

function Services() {

    useEffect(() => {
        document.title = "services"; // Set the title for About page
    }, []);

    return (
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>
            <div className="services-grid">
                {servicesData.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.image} alt={service.title} className="service-image" />
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;