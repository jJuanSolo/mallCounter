const functions = require('firebase-functions');


const admin = require('firebase-admin');
const config = {
    apiKey: "AIzaSyDme5dGRIYhVLdmKgHsskQ4xRvbIC4idZg",
    authDomain: "mall-counter.firebaseapp.com",
    databaseURL: "https://mall-counter.firebaseio.com",
    projectId: "mall-counter",
    storageBucket: "mall-counter.appspot.com",
    messagingSenderId: "1065624270406",
    appId: "1:1065624270406:web:49259d0e2b0128c0a9fc47",
    measurementId: "G-ZCS02BFR76"
  };
admin.initializeApp(config); 

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
