import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSHpVeoyQxEjFWq4qFpQBAEFoPuF7olUk",
    authDomain: "code-exp-add.firebaseapp.com",
    projectId: "code-exp-add",
    storageBucket: "code-exp-add.appspot.com",
    messagingSenderId: "420280661773",
    appId: "1:420280661773:web:e475e7f047bdc3a751e244"
};

firebase.initializeApp(firebaseConfig);
export default firebase;