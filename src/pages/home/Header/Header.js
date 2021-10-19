import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

function Header() {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <h1>eHealthCare</h1>
            <nav>
                <Link to="/home" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact Us</Link>
                <div className="log-div">
                    <p className="userName">{user?.displayName}</p>
                    {user?.email ?
                        <button onClick={logOut} className="log">LogOut</button> :
                        <Link to="/login" >LogIn</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;