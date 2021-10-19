import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../pages/login/firebase/firebase.init";

initializeAuth();

function useFirebase() {
    const [user, setUser] = useState({});
    const auth = getAuth();

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
        signInWithGoogle,
        logOut
    };
};

export default useFirebase;