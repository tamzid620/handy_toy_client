// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkwA9g7mpeVhC18E6S-9dky_GQuWnjgGE",
  authDomain: "handy-toy.firebaseapp.com",
  projectId: "handy-toy",
  storageBucket: "handy-toy.appspot.com",
  messagingSenderId: "790237089087",
  appId: "1:790237089087:web:ce82a51f3c010c170bd78a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;