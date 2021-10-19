import React from "react";
import "./Banner.css";

function Banner() {
    return (
        <div className="banner">
            <section className="banner-text">
                <h1>Welcome To eHealthCare</h1>
                <p>The best Healthcare service available.</p>
                <button>Make an Appointment</button>
            </section>
        </div>
    );
};

export default Banner;