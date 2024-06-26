// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA1CNXtc3DLRwXVf5lCB4fVILzCKJQ0ZhQ",
	authDomain: "react-todo-750af.firebaseapp.com",
	projectId: "react-todo-750af",
	storageBucket: "react-todo-750af.appspot.com",
	messagingSenderId: "52528618441",
	appId: "1:52528618441:web:e6a79775f16b50b3236618",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseFirestore = getFirestore(firebaseApp);
