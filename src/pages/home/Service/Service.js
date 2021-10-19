import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

function Service({ service }) {
    const { id, name, shortDesc, img } = service;

    return (
        <div className="service">
            <img width="100%" src={img} alt="" />
            <div className="service-text">
                <h2>{name}</h2>
                <p><small>{shortDesc}</small></p>
                <Link to={`/service-details/${id}`}>
                    <button className="button">See More</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;