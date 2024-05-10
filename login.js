function showLoginForm() {
    document.getElementById('loginForm').style.display = 'flex';
    document.querySelector('.container').style.display = 'none';
}

function hideLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
}

function showSignupForm() {
    document.getElementById('signupForm').style.display = 'flex';
    document.querySelector('.container').style.display = 'none';
}