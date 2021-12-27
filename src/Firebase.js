import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
  apiKey: "AIzaSyB_IyAhHflUbQ-b8LsB44G8dliWNdoZkZY",
  authDomain: "testfirebase-23940.firebaseapp.com",
  projectId: "testfirebase-23940",
  storageBucket: "testfirebase-23940.appspot.com",
  messagingSenderId: "79394535461",
  appId: "1:79394535461:web:ce234bd6a50fcf98f427cc"
  };
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;