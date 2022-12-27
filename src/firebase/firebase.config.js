// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE5SJNqCnodW_QCyAJUgy_PL3_YzvnWFA",
    authDomain: "task-manager-95d3c.firebaseapp.com",
    projectId: "task-manager-95d3c",
    storageBucket: "task-manager-95d3c.appspot.com",
    messagingSenderId: "159771047937",
    appId: "1:159771047937:web:42578c88cd9ba78da36800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;