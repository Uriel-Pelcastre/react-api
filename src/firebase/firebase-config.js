
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyColNO9VuCZccNx1vAE2lMtf4WVhhwBtkE",
    authDomain: "react-app-cursos-c7f58.firebaseapp.com",
    projectId: "react-app-cursos-c7f58",
    storageBucket: "react-app-cursos-c7f58.appspot.com",
    messagingSenderId: "567581721944",
    appId: "1:567581721944:web:50cc0ad93326ae862f912d"
  };
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
