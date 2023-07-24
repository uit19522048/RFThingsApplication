import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBekd4zQFs7ix-sT7faIoFCi-XtyLgNXdA",
  authDomain: "fir-55101.firebaseapp.com",
  databaseURL: "https://fir-55101-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-55101",
  storageBucket: "fir-55101.appspot.com",
  messagingSenderId: "108190291218",
  appId: "1:108190291218:web:8eb7980dc89785dbfc8fcb"
};

initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();

export { auth, db }