// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYC4GsPHQBeS-endaaEmdX0pnAF4EWunM",
    authDomain: "dragon-news-saidul.firebaseapp.com",
    projectId: "dragon-news-saidul",
    storageBucket: "dragon-news-saidul.appspot.com",
    messagingSenderId: "982293239306",
    appId: "1:982293239306:web:69cd550db682bbe0d3f1f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth