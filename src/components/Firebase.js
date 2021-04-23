import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTd4ft3ZFg_xK5TUTugvVffjsxaFpnVZA",
    authDomain: "ct-portfolio.firebaseapp.com",
    projectId: "ct-portfolio",
    storageBucket: "ct-portfolio.appspot.com",
    messagingSenderId: "574498949021",
    appId: "1:574498949021:web:a65dae7f200bbeef085174"
    });

const db = firebaseApp.firestore();

export {db};