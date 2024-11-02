  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZjy9z9fuAGgbIQxjgsfvnbp_vEiJsLbk",
  authDomain: "login-14d37.firebaseapp.com",
  projectId: "login-14d37",
  storageBucket: "login-14d37.appspot.com",
  messagingSenderId: "172844646482",
  appId: "1:172844646482:web:f55c1e6cd62774d898df8b",
  measurementId: "G-SRVRX110W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
