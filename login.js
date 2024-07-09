async function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    const signupMessage = document.getElementById('signupMessage');
    if (data.success) {
        signupMessage.innerHTML = 'Signup successful.';
        alert("Registered Successfully! Please Login to continue.");
    } else {
        signupMessage.innerHTML = data.message;
    }
}

async function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    const loginMessage = document.getElementById('loginMessage');
    if (data.success) {
        loginMessage.innerHTML = 'Login successful.';
    } else {
        loginMessage.innerHTML = data.message;
    }
}
