// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC30qn67o7lbHYhuXXI1vreQxiJeolSu2w",
  authDomain: "netflix-7d46b.firebaseapp.com",
  projectId: "netflix-7d46b",
  storageBucket: "netflix-7d46b.appspot.com",
  messagingSenderId: "304434078028",
  appId: "1:304434078028:web:f605683da4f492aa6b2fe9",
  measurementId: "G-KBM17FGQCD"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();