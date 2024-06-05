 import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
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

  // ----- New Registration code start
  document.querySelector(".signup-form").addEventListener("submit", function (e) {
    e.preventDefault()
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if (email.trim() === "") {
      alert("Please enter an email address");
      return;
    }

    var apiUrl = "https://disposable.debounce.io/?email=" + encodeURIComponent(email);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var disposable = data.disposable === "true"; // Convert string to boolean
        if (disposable) {
          alert("Please provide a genuine email address to continue.");
        } else {
            //For new registration
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
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
    });