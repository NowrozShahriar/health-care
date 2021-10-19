import React from "react";

function ServiceContent({ service }) {
    const { name, longDesc, img } = service;

    return (
        <div className="service-content">
            <img width="100%" src={img} alt="" />
            <div className="service-text">
                <h2>{name}</h2>
                <p><small>{longDesc}</small></p>
            </div>
        </div>
    );
};

export default ServiceContent;