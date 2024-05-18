// Import the functions you need from the SDKs you need
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
    import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js';
    import {
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
    } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
    //const credential = EmailAuthProvider.credential(email, password);
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyCu2WXknNce_49J5BLuR1DyHm319hu6dWc',
      authDomain: 'login-13127.firebaseapp.com',
      projectId: 'login-13127',
      storageBucket: 'login-13127.appspot.com',
      messagingSenderId: '151656578300',
      appId: '1:151656578300:web:c67208ab6ec437c844ab79',
      measurementId: 'G-L3PPD58MZ8',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    //console.log(app);
    const auth = getAuth();

  //----- New Registration code start
  let register = document.querySelector(".register");
  document.querySelector("#register-form").addEventListener("submit", function (e) {
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
            console.log("going for new registration")
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                alert('Registration successfully!!');
                email = '';
                password = '';
                register.style.transform = 'translateY(8%)';
                // ...
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
    //----- End

    //----- Login code start
    document.querySelector('#login-form').addEventListener('submit', function (e) {
        e.preventDefault()
      let email = document.querySelector('#login_email').value;
      let password = document.querySelector('#login_password').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);
          //window.location.href = '../../index.html';
          alert(user.email+" Login successfully!!!");
          document.querySelector('#logout').style.display = 'block';
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
        });
    });
    //----- End

    //----- Logout code start
    document.getElementById('logout').addEventListener('click', function () {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.');
          alert('Sign-out successful.');
          document.getElementById('logout').style.display = 'none';
        })
        .catch((error) => {
          // An error happened.
          console.log('An error happened.');
        });
    });
    //----- End

    // google auth

    function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // Handle successful sign-in
          // const user = result.user;
          // console.log(user);
          window.location.href = '../../index.html';
        })
        .catch((error) => {
          // Handle errors
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    }

    document.getElementById('google').addEventListener('click', function () {
      signInWithGoogle();
    });
  function applyDarkModePreferenceOnLoginPage() {
    const isDarkMode = isDarkModePreferred();
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.querySelector('.navbar').classList.add('dark-mode');
      const closeButton = document.querySelector('.close-icon');
      closeButton.src = "../images/close-white.png";
      // For darkmode styles
      const noteElements = document.querySelectorAll('.note *');
      noteElements.forEach(element => {
        element.classList.add('dark-mode');
      })

      const containerElements = document.querySelectorAll('.container *');
      containerElements.forEach(element => {
        element.classList.add('dark-mode');
      })


    } else {
      document.body.classList.remove("dark-mode");
      document.querySelector('.navbar').classList.remove('dark-mode');
      const closeButton = document.querySelector('.close-icon');
      closeButton.src = "../images/close1.png";
    }
  }

    // Function to check if dark mode preference exists
    function isDarkModePreferred() {
      return JSON.parse(localStorage.getItem('darkMode'));
    }

    // Call the function when the page loads
    document.addEventListener('DOMContentLoaded', function () {
      applyDarkModePreferenceOnLoginPage();
    });

    //forgot password event listener 
    const forgotPasswordLink = document.querySelector("#forgot_password_link")

    forgotPasswordLink.addEventListener("click", (e)=>{
      const email = document.getElementById('login_email').value;
    })