import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRgeLKP3aByGg0h_3pUqkFWQsItq74eDU",
    authDomain: "react-firegram-860ea.firebaseapp.com",
    projectId: "react-firegram-860ea",
    storageBucket: "react-firegram-860ea.appspot.com",
    messagingSenderId: "451286953064",
    appId: "1:451286953064:web:3050be3d1eea2a2dca9fdd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };