import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";

//import { getDatabase, ref, child, get } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx1fuVhuTj0he-F9AkyvVnWVa6qYFwSwA",
  authDomain: "unemployment-hackathon.firebaseapp.com",
  projectId: "unemployment-hackathon",
  storageBucket: "unemployment-hackathon.appspot.com",
  messagingSenderId: "867881507684",
  appId: "1:867881507684:web:1a09f94c3fcc3458f4b871",
  measurementId: "G-E5L2R8J8YY",
};
//const database = getDatabase();
initializeApp(firebaseConfig);
const db = getFirestore();
//collection references
const colRef = collection(db, "users");

getDocs(colRef).then((snapshot) => {
  let users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  console.log(users);
});

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { getFirestore, getDocs, collection, colRef };
//export{getDatabase}
