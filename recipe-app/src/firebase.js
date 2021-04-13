import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0BtRgQ0UK_Ac8ooHSVWOEJSEtkJVEalA",
    authDomain: "my-recipe-app-5fde2.firebaseapp.com",
    projectId: "my-recipe-app-5fde2",
    storageBucket: "my-recipe-app-5fde2.appspot.com",
    messagingSenderId: "428624181194",
    appId: "1:428624181194:web:0edb43f7485e2fcf294133"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = async () => {
  await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
};
