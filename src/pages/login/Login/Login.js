import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Login.css"

function Login() {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="login">
            <h1>Login</h1>
            <button className="button" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;