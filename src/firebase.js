import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx1fuVhuTj0he-F9AkyvVnWVa6qYFwSwA",
  authDomain: "unemployment-hackathon.firebaseapp.com",
  projectId: "unemployment-hackathon",
  storageBucket: "unemployment-hackathon.appspot.com",
  messagingSenderId: "867881507684",
  appId: "1:867881507684:web:1a09f94c3fcc3458f4b871",
  measurementId: "G-E5L2R8J8YY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
