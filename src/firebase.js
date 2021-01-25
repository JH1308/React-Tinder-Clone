import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGYcc37JD5e8KMCgcUvTTLrSSmOghV9ak",
    authDomain: "tinder-clone-2f883.firebaseapp.com",
    projectId: "tinder-clone-2f883",
    storageBucket: "tinder-clone-2f883.appspot.com",
    messagingSenderId: "609578498746",
    appId: "1:609578498746:web:280fae1069b788d8f56083",
    measurementId: "G-KK5PLN3NS0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;