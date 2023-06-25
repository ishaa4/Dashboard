
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9KDFiipTNJ58BeChEzNPrS9Pc_D_3yQc",
  authDomain: "dashboard-4a770.firebaseapp.com",
  projectId: "dashboard-4a770",
  storageBucket: "dashboard-4a770.appspot.com",
  messagingSenderId: "527824846216",
  appId: "1:527824846216:web:1270a889372bb95456ce3d",
  measurementId: "G-Y9JVR98S2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
