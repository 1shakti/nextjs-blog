// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtI2mMUahy0S4wNOmeqbsEnDjoG-ra7So",
  authDomain: "leetclone-cedd1.firebaseapp.com",
  projectId: "leetclone-cedd1",
  storageBucket: "leetclone-cedd1.appspot.com",
  messagingSenderId: "617402114103",
  appId: "1:617402114103:web:c600390beaa58e4cd41fb2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth =  getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore, app }