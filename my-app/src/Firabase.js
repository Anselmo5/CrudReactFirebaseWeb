import firebase from "firebae/compat/app";
import "firebase/compat/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyDKTTO5UdsOYTjamdbz1ZuIHtkz63wfXvk",
    authDomain: "crudweb-25f59.firebaseapp.com",
    projectId: "crudweb-25f59",
    storageBucket: "crudweb-25f59.appspot.com",
    messagingSenderId: "253599502241",
    appId: "1:253599502241:web:dad8330ebf87dc8610c5e0",
    measurementId: "G-ZKRY2EVVC2"
  };

  if(!firebase.apps.length){
    console.log(`Conectando... ${firebase.apps.length}`);
    firebase.initializeApp(firebaseConfig)
    console.log(`Conectado ${firebase.apps.length}`);
  }

  export default firebase;