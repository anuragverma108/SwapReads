// function for user signup



async function signup() {
    try {
        // get username and password from input fields
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;

        // send signup request to server
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        // check if response is successful
        if (!response.ok) {
            throw new Error('Failed to sign up. Server responded with ' + response.status);
        }

        // parse response data
        const data = await response.json();

        // display signup message to user
        const signupMessage = document.getElementById('signupMessage');
        if (data.success) {
            signupMessage.innerHTML = 'Signup successful.';
        } else {
            signupMessage.innerHTML = data.message;
        }
    } catch (error) {
        // log error
        console.error('Signup failed:', error.message);
        // display user-friendly error message
        const signupMessage = document.getElementById('signupMessage');
        signupMessage.innerHTML = 'Signup failed. Please try again later.';
    }
}

// function for user login
async function login() {
    try {
        // get username and password from input fields
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // send login request to server
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        // check if response is successful
        if (!response.ok) {
            throw new Error('Failed to log in. Server responded with ' + response.status);
        }

        // parse response data
        const data = await response.json();

        // display login message to user
        const loginMessage = document.getElementById('loginMessage');
        if (data.success) {
            loginMessage.innerHTML = 'Login successful.';
        } else {
            loginMessage.innerHTML = data.message;
        }
    } catch (error) {
        // log error
        console.error('Login failed:', error.message);
        // display user-friendly error message
        const loginMessage = document.getElementById('loginMessage');
        loginMessage.innerHTML = 'Login failed. Please try again later.';
    }
}
