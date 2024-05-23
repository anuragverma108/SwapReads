// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";


// const firebaseConfig = {
//     apiKey: 'AIzaSyCu2WXknNce_49J5BLuR1DyHm319hu6dWc',
//     authDomain: 'login-13127.firebaseapp.com',
//     projectId: 'login-13127',
//     storageBucket: 'login-13127.appspot.com',
//     messagingSenderId: '151656578300',
//     appId: '1:151656578300:web:c67208ab6ec437c844ab79',
//     measurementId: 'G-L3PPD58MZ8',
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// auth.languageCode = 'en'
// const provider = new GoogleAuthProvider();

// const googleLogin = document.getElementById("google-sign-in");
// googleLogin.addEventListener("click", function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const user = result.user;
//             console.log(user);
//             alert(user.email+" Login successfully!!!");
//             document.querySelector('#logout').style.display = 'block';
//             // window.location.href="./index.html";
//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });

// })

// const googleSignup = document.getElementById("google-signup");
// googleSignup.addEventListener("click", function () {
//     signInWithPopup(auth, provider)

//         .then((result) => {
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const user = result.user;
//             console.log(user);
//             alert(user.email+" Login successfully!!!");
//             document.querySelector('#logout').style.display = 'block';
//             // window.location.href="./index.html";
//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });

// })



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: 'AIzaSyCu2WXknNce_49J5BLuR1DyHm319hu6dWc',
//     authDomain: 'login-13127.firebaseapp.com',
//     projectId: 'login-13127',
//     storageBucket: 'login-13127.appspot.com',
//     messagingSenderId: '151656578300',
//     appId: '1:151656578300:web:c67208ab6ec437c844ab79'
// };

const firebaseConfig = {
    apiKey: "AIzaSyAIDh842xGC_NZj6pMcB9THjNQ1DyUVnZU",
    authDomain: "swapreads-c7d1d.firebaseapp.com",
    projectId: "swapreads-c7d1d",
    storageBucket: "swapreads-c7d1d.appspot.com",
    messagingSenderId: "912206670085",
    appId: "1:912206670085:web:9a6182b16ac2529510ef6c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const google_login = document.getElementById("google-sign-in")
google_login.addEventListener("click", function () {

    signInWithPopup(auth, provider)

        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            alert(user.email + " Login successfully!!!");
            document.querySelector('#logout').style.display = 'block';
            // alert("success");

        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
        });

})


const google_signup = document.getElementById("google-signup")
google_signup.addEventListener("click", function () {

    signInWithPopup(auth, provider)

        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            alert(user.email + " Login successfully!!!");
            document.querySelector('#logout').style.display = 'block';
            // alert("success")

        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
        });

})

// function updateUserProfile(user){
//     const userName = userr.displayName;
//     const userEmail = user.email;
//     const userProfilePicture = user.photoURL;


// }