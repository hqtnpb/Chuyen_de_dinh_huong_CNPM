// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEAsVujOepW1_fV0pN4wijV3AI_94-q8s",
    authDomain: "blog-website-e0d5a.firebaseapp.com",
    projectId: "blog-website-e0d5a",
    storageBucket: "blog-website-e0d5a.firebasestorage.app",
    messagingSenderId: "1040709456907",
    appId: "1:1040709456907:web:928bd09a3355916ed6a30e",
    measurementId: "G-EG442TNQ44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user;
        })
        .catch((error) => {
            console.log(error);
        });

    return user;
};
