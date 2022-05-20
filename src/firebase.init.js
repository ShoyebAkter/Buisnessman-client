// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkG7W_GYWJQ0bbHeENIUF1xrMUw3YxA6Y",
  authDomain: "restuarent-e2a25.firebaseapp.com",
  projectId: "restuarent-e2a25",
  storageBucket: "restuarent-e2a25.appspot.com",
  messagingSenderId: "935041380313",
  appId: "1:935041380313:web:8ddf720f0405ca632ff3c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;