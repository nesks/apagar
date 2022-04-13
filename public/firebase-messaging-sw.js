importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')
// import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAXHxcArkwHQnmZYWSnswJNzXTYe3PIWO8",
    authDomain: "notification-cd4eb.firebaseapp.com",
    projectId: "notification-cd4eb",
    storageBucket: "notification-cd4eb.appspot.com",
    messagingSenderId: "176710030430",
    appId: "1:176710030430:web:ca3a88f0e0887e4425d0cf",
    measurementId: "G-HPGY8MJMHD"
  };
  
firebase.initializeApp(firebaseConfig);  

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) =>{
    console.log(
        '[firebase-messaging-sw] Received background message ', payload
    );
});