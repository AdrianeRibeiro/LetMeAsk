import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyDftJYNZOKuljPObx4nbPyM3Al52OF1mNo",
  authDomain: "letmeask-3bbaf.firebaseapp.com",
  databaseURL: "https://letmeask-3bbaf-default-rtdb.firebaseio.com",
  projectId: "letmeask-3bbaf",
  storageBucket: "letmeask-3bbaf.appspot.com",
  messagingSenderId: "497884267682",
  appId: "1:497884267682:web:7afe9408772641cbae83fb"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }

//https://console.firebase.google.com
