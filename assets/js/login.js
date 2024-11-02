// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {getDatabase,set,ref,get,child} from 'firebase/database'
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


// List of allowed email domains
const allowedDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com']; // Add more reputable domains as needed

// Register event
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Extract domain from email
    const emailDomain = email.split('@')[1];

    // Check if email domain is allowed
    if (!allowedDomains.includes(emailDomain)) {
        alert('Please use an email from a reputable provider (Gmail, Outlook, Yahoo, etc.)');
        return; // Prevent form submission
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Send email verification
        await sendEmailVerification(user);
        alert('Something is worng! 204')

        // Set a timeout for checking email verification
        setTimeout(async () => {
            await reload(user);
            if (!user.emailVerified) {
                await deleteUser(user)
                    .then(() => {
                        alert('Account deleted due to unverified email.');
                        location.reload(); // Reload the page after deletion
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(errorMessage);
                        location.reload(); // Reload the page on error
                    });
            }
        }, 30000); // 30 seconds

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        location.reload(); // Reload the page on error
    }
});


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
      // console.log(user);;
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