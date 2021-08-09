import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDy4gjAZWVU3w9q5bgTr72_Vabj8PH7aC4",
    authDomain: "tinder-clone-ac958.firebaseapp.com",
    projectId: "tinder-clone-ac958",
    storageBucket: "tinder-clone-ac958.appspot.com",
    messagingSenderId: "493651714598",
    appId: "1:493651714598:web:80be7d482ff194e5117ce7",
    measurementId: "G-SKC7YB76WX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;