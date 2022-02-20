import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZLrYzzEz2hcAYuPENSl-8WC9A5euDr4",
  authDomain: "linkedin-clone-a8753.firebaseapp.com",
  projectId: "linkedin-clone-a8753",
  storageBucket: "linkedin-clone-a8753.appspot.com",
  messagingSenderId: "344720430158",
  appId: "1:344720430158:web:343965dfc05e1530831f1f",
  measurementId: "G-B0KGKK7GCF",
};

const firebaseApp = firebase.initilizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
