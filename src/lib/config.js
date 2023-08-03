import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCuo2Nkw_BzotYTyvlhFUt3fITCMHCEkBk",
  authDomain: "books-a56bd.firebaseapp.com",
  projectId: "books-a56bd",
  storageBucket: "books-a56bd.appspot.com",
  messagingSenderId: "959693936487",
  appId: "1:959693936487:web:7a5e5619b84845f581c1c2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);