import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../Service/Service"

function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="services">
            <h1>Our Services</h1>
            <div className="service-container">
            {
                services.map(service => <Service
                    key={service.name} service={service}/>)
            }
            </div>
        </div>
    );
};

export default Services;