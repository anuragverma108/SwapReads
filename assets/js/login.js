// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

// Your web app's Firebase configuration
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
const auth = getAuth();

// Confirm Password Functionality
document.getElementById('register-form').addEventListener('submit', function(event) {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var errorElement = document.getElementById('confirm-password-error');

  if (password !== confirmPassword) {
    errorElement.style.display = 'block';
    event.preventDefault(); // Prevent the form from submitting
  } else {
    errorElement.style.display = 'none';

    // Firebase Authentication for Registering a New User
    var email = document.getElementById('email').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert(user.email + " registered successfully!!!");
        window.location.href = "./index.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
    event.preventDefault(); // Prevent the form from submitting normally to handle via Firebase
  }
});

// Login code start
document.querySelector('#login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let email = document.querySelector('#login_email').value;
  let password = document.querySelector('#login_password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(user.email + " Login successfully!!!");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});

// Logout code start
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

// Google Auth
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Handle successful sign-in
      window.location.href = '../../index.html';
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
    import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js';
    import {
      getAuth,
      signInWithEmailAndPassword,
      signOut,
    } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
    import {getDatabase,set,ref,get,child} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js'
    //const credential = EmailAuthProvider.credential(email, password);
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //   apiKey: 'AIzaSyCu2WXknNce_49J5BLuR1DyHm319hu6dWc',
    //   authDomain: 'login-13127.firebaseapp.com',
    //   projectId: 'login-13127',
    //   storageBucket: 'login-13127.appspot.com',
    //   messagingSenderId: '151656578300',
    //   appId: '1:151656578300:web:c67208ab6ec437c844ab79',
    //   measurementId: 'G-L3PPD58MZ8',
    // };

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
    const dbref=getDatabase(app);

    //----- Login code start
    console.log(document.querySelector('#login-form'))
    document.querySelector('#login-form').addEventListener('submit', function (e) {
      e.preventDefault()
      let email = document.querySelector('#login_email').value;
      let password = document.querySelector('#login_password').value;
      console.log(password)

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          get(child(dbref,'UsersAuthList/' + userCredential.user.uid))
          .then((snapshot)=>{
            if(snapshot.exists()){
              sessionStorage.setItem('user-info',JSON.stringify({
                username:snapshot.val().email,
                password:snapshot.val().password
              }))
              sessionStorage.setItem('user-creds',JSON.stringify(userCredential.user))
            }
          })
          email="";
          password="";
          //console.log(user);
          //window.location.href = '../../index.html';
          alert(user.email+" Login successfully!!!");
          window.location.href="./index.html";
          // document.querySelector('#logout').style.display = 'block';
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
          sessionStorage.removeItem('user-info')
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
          console.log(result);
          // Handle successful sign-in
          // const user = result.user;
          // console.log(user);
        //  window.location.href = '../../index.html';
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

// Forgot password event listener 
const forgotPasswordLink = document.querySelector("#forgot_password_link");

forgotPasswordLink.addEventListener("click", (e) => {
  const email = document.getElementById('login_email').value;
});
