import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCyw40F5N1T6m-YNCO5hB8B6VsxX6MhEIU",
  authDomain: "evernote-clone-e46c0.firebaseapp.com",
  databaseURL: "https://evernote-clone-e46c0.firebaseio.com",
  projectId: "evernote-clone-e46c0",
  storageBucket: "evernote-clone-e46c0.appspot.com",
  messagingSenderId: "1005616359573",
  appId: "1:1005616359573:web:3e82677baad80ad1de139c",
  measurementId: "G-KYG4JCXM3S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
