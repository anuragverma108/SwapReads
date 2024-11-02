import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

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
auth.languageCode = 'en';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const googleLogin = document.getElementById("google-sign-in");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            sessionStorage.setItem('user-info', JSON.stringify({ username: user.displayName }));
            alert(user.email + " logged in successfully!");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

const googleSignup = document.getElementById("google-signup");
googleSignup.addEventListener("click", function () {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            alert(user.email + " signed up successfully!");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

const facebookLogin = document.getElementById("facebook-sign-in");
facebookLogin.addEventListener("click", function () {
    signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const user = result.user;
            sessionStorage.setItem('user-info', JSON.stringify({ username: user.displayName }));
            alert(user.email + " logged in successfully!");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

const facebookSignup = document.getElementById("facebook-signup");
facebookSignup.addEventListener("click", function () {
    signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            alert(user.email + " signed up successfully!");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
