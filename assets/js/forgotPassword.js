import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js';
import {
  getAuth,
  sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAIDh842xGC_NZj6pMcB9THjNQ1DyUVnZU",
  authDomain: "swapreads-c7d1d.firebaseapp.com",
  projectId: "swapreads-c7d1d",
  storageBucket: "swapreads-c7d1d.appspot.com",
  messagingSenderId: "912206670085",
  appId: "1:912206670085:web:9a6182b16ac2529510ef6c"
};



const app = initializeApp(firebaseConfig);
getAnalytics(app)
const auth = getAuth(app);

const ResetForm = document.querySelector("#login-form")
ResetForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email = document.querySelector("#login_email").value
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password Reset email sent")
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Email does not exists")
  });
});

