import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./Login.css"

export let displayName;

function Login() {
    const {user, signInWithGoogle, processLogin, registerNewUser, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNew, setIsNew] = useState(false);

    function toggleRegister() {
        setIsNew(!isNew);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleRegistration(event) {
        event.preventDefault();
        if (isNew) {
            registerNewUser(email, password);
        } else {
            processLogin(email, password);
        }
    }

    return (
            <div>
                {user.email ? <div className="logged"><h1>Logged in as {user.displayName}.</h1></div> : <div>
                    <form onSubmit={handleRegistration} className="login">
                        <h1>{isNew ? 'Sign up' : 'Log in'}</h1>

                        {isNew && <input onBlur={(e) => displayName = e.target.value} className="input-box" type="text" placeholder="Name"/>}
                        <input onBlur={handleEmail} className="input-box" type="email" placeholder="Email"/>
                        <input onBlur={handlePassword} className="input-box" type="password" placeholder="Password"/>
                        {isNew ? <input type="submit" className="button" value="Register" /> : <input type="submit" className="button" value="Login" />}
                        <h4>Or</h4>
                        <button className="button" onClick={signInWithGoogle}>Sign in with Google</button>

                        {/* <div>
                            <input type="checkbox" name="stay" id="stay"/>
                            <label htmlFor="stay" style={{marginLeft: '0px'}}><small>Keep me signed in.</small></label>
                        </div> */}

                    </form>
                    <div className="register-support">
                        {isNew ? <p onClick={toggleRegister}>Already have an account?</p> : <p onClick={toggleRegister}>Create a new account</p>}
                    </div>
                </div>}
            </div>
    );
};


export default Login;
