import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../pages/login/firebase/firebase.init";
import { displayName} from "../pages/login/Login/Login";

initializeAuth();

function useFirebase() {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: displayName })
            .then(result => {})
    }

    function signInWithGoogle() {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    function logOut() {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        error,
        processLogin,
        registerNewUser,
        signInWithGoogle,
        logOut
    };
};

export default useFirebase;