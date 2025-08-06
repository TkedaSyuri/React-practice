import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBYeOkIF0Mkv8ACN6c0-ZFIAqoXGgGZVq4",
  authDomain: "household-typescript-731e6.firebaseapp.com",
  projectId: "household-typescript-731e6",
  storageBucket: "household-typescript-731e6.appspot.com",
  messagingSenderId: "178331519973",
  appId: "1:178331519973:web:539dec2ef72c91ff23fd0c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}