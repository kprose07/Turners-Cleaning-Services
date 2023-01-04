import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnpJuG5lkfGMaSg3ekVFrNusTyaGHOEKs",
    authDomain: "turner-s-cleaning-contact.firebaseapp.com",
    projectId: "turner-s-cleaning-contact",
    storageBucket: "turner-s-cleaning-contact.appspot.com",
    messagingSenderId: "117057016916",
    appId: "1:117057016916:web:84bb05e31f3267a8ab09c1"
});

var db = firebaseApp.firestore();
export {db};