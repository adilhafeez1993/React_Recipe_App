import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6j8Ws3P4dEhQmrTL6nMmMVH9UWsA12jw",
  authDomain: "cooking-ninja-site-939bc.firebaseapp.com",
  projectId: "cooking-ninja-site-939bc",
  storageBucket: "cooking-ninja-site-939bc.appspot.com",
  messagingSenderId: "368537174378",
  appId: "1:368537174378:web:a89bb24051912e1b64a513",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
