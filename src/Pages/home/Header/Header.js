import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h1>eHealthCare</h1>
            <nav>
                <Link to="/home" >Home</Link>
                <Link to="/home#services" >Services</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact Us</Link>
                <Link to="/login" >Login</Link>
            </nav>
        </div>
    );
};

export default Header;