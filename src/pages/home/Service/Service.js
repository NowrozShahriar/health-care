import React from "react";
import "./Service.css";

function Service({ service }) {
    const { name, shortDesc, img } = service;
    return (
        <div className="service">
            <img width="100%" src={img} alt="" />
            <div className="service-text">
                <h2>{name}</h2>
                <p><small>{shortDesc}</small></p>
                <button>See More</button>
            </div>
        </div>
    );
};

export default Service;