import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAIDh842xGC_NZj6pMcB9THjNQ1DyUVnZU",
    authDomain: "swapreads-c7d1d.firebaseapp.com",
    projectId: "swapreads-c7d1d",
    storageBucket: "swapreads-c7d1d.appspot.com",
    messagingSenderId: "912206670085",
    appId: "1:912206670085:web:9a6182b16ac2529510ef6c"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import {getDatabase,set,ref} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js'
const firebaseConfig = {
  apiKey: "AIzaSyAIDh842xGC_NZj6pMcB9THjNQ1DyUVnZU",
  authDomain: "swapreads-c7d1d.firebaseapp.com",
  projectId: "swapreads-c7d1d",
  storageBucket: "swapreads-c7d1d.appspot.com",
  messagingSenderId: "912206670085",
  appId: "1:912206670085:web:9a6182b16ac2529510ef6c"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    //console.log(app);
    const auth = getAuth();
    const db=getDatabase(app);
  // ----- New Registration code start
  document.querySelector(".signup-form").addEventListener("submit", function (e) {
    e.preventDefault()
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if (email.trim() === "") {
      alert("Please enter an email address");
      return;
    }

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        const email = prompt("Enter your email to reset the password:");
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password Reset email sent");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Email does not exist: " + errorMessage);
=======
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var disposable = data.disposable === "true"; // Convert string to boolean
        if (disposable) {
          alert("Please provide a genuine email address to continue.");
        } else {
            //For new registration
            console.log('new');
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                console.log(userCredential);
                console.log('snbf');
                set(ref(db,'UsersAuthList/' + userCredential.user.uid),{
                  email:email,
                  password:password
                })
                const user = userCredential;
                console.log(user);
                alert('Registration successfully!!');
                email = '';
                password = '';
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
                alert(error);
              });
          }
        });
    }
});
