// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu0xFsbsh5mVNLlAQzDcvy4kGYzV9VGh8",
  authDomain: "doctors-portal-491da.firebaseapp.com",
  projectId: "doctors-portal-491da",
  storageBucket: "doctors-portal-491da.appspot.com",
  messagingSenderId: "96356500094",
  appId: "1:96356500094:web:01ed8656675a2932024e2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth