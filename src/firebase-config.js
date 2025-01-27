// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxcrSeBpT0Q_VkEyob8_9uiPyRC3jHvFg",
  authDomain: "promotbox-54e94.firebaseapp.com",
  projectId: "promotbox-54e94",
  storageBucket: "promotbox-54e94.appspot.com",
  messagingSenderId: "855483451814",
  appId: "1:855483451814:web:32f53ff2f63a3fdbd82767",
  measurementId: "G-4914RDF8YF",
};

// Initialize Firebase
// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
