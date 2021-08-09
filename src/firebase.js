import firebase from "firebase";

const firebaseConfig = {
    apiKey: "xxxxxx",
    authDomain: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxx",
    appId: "xxxx",
    measurementId: "xxxxxx"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;
