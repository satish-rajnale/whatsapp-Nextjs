import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHfBv_oErMYAmlRqnR_5uE9qn4CTW6WEc",
    authDomain: "whatsapp2-777de.firebaseapp.com",
    projectId: "whatsapp2-777de",
    storageBucket: "whatsapp2-777de.appspot.com",
    messagingSenderId: "778166675843",
    appId: "1:778166675843:web:b128dbac2be97bf9332eb6"
  };

  const app = firebase.apps.length==0 ? firebase.initializeApp(firebaseConfig)
  :firebase.app();

  const db= app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db , auth, provider };