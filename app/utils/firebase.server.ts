import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpDWEUjNDf8lCIK8lJi9zFysxOKsMQRpI",
  authDomain: "do-you-need-an-umbrella.firebaseapp.com",
  projectId: "do-you-need-an-umbrella",
  storageBucket: "do-you-need-an-umbrella.appspot.com",
  messagingSenderId: "502216027320",
  appId: "1:502216027320:web:6ca1af0a76a97428b2d84d",
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

export { app, db };
