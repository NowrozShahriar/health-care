import React from "react";
import "./Services.css";
import Service from "../Service/Service"
import useFakedata from "../../../hooks/useFakedata";

function Services() {
    const services = useFakedata();

    return (
        <div className="services">
            <h1>Our Services</h1>
            <div className="service-container">
            {
                services.map(service => <Service
                    key={service.id} service={service}/>)
            }
            </div>
        </div>
    );
};

export default Services;