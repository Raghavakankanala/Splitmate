// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCKXALQSLpkxGncXFPi-_0k62EfR0sdlg",
  authDomain: "splitmate-30579.firebaseapp.com",
  projectId: "splitmate-30579",
  storageBucket: "splitmate-30579.firebasestorage.app",
  messagingSenderId: "837489491015",
  appId: "1:837489491015:web:810dc319e3d3f1f357c562",
  measurementId: "G-VNWBTB8PDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authentication
export const auth = getAuth(app);
auth.useDeviceLanguage(); // Sets OTP language based on user device

// Export OTP functions
export { RecaptchaVerifier, signInWithPhoneNumber };