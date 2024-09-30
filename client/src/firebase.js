// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// Ensure that the environment variable VITE_FIREBASE_API_KEY is defined in your .env file
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  // Ensure this is defined
  authDomain: "mern-estate-bc139.firebaseapp.com",
  projectId: "mern-estate-bc139",
  storageBucket: "mern-estate-bc139.appspot.com",
  messagingSenderId: "606301212399",
  appId: "1:606301212399:web:0cc802542691d756f7951a",
  measurementId: "G-NFJ442HL8L"  // This is optional for most use cases
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Export the app instance
export { app };
