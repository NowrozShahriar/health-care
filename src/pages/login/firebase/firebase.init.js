import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
function initializeAuth() {
    initializeApp(firebaseConfig);
}

export default initializeAuth;