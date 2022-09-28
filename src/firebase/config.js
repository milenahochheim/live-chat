// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//firebase package or the core part of the firebase
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB15azmfpj7FgPBE0Flk4M39_6afvDmfZM",
  authDomain: "vue-firebase-site-dff6c.firebaseapp.com",
  projectId: "vue-firebase-site-dff6c",
  storageBucket: "vue-firebase-site-dff6c.appspot.com",
  messagingSenderId: "342241378371",
  appId: "1:342241378371:web:2cde46632d70ecdea214f6",
  measurementId: "G-LJCH2MVH9R",
};

//init firebase -> firebase import + initializeApp method + argument firebaseConfig
//config -> initialize the connection to the firebase back end
firebase.initializeApp(firebaseConfig);

//initialize the store service bc it doesnt work automatically
const projectFirestore = firebase.firestore();
//para postar post na oredem de postagem
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timeStamp };
