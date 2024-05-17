document.addEventListener('DOMContentLoaded', () => {
    const authDiv = document.getElementById('auth');
    const bookManagerDiv = document.getElementById('book-manager');
    const userSpan = document.getElementById('user');
    const bookList = document.getElementById('book-list');

    // Simulating a database for demonstration purposes
    const users = {};
    const books = {};

    function login() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (users[username] && users[username] === password) {
            sessionStorage.setItem('username', username);
            showBookManager(username);
        } else {
            alert('Invalid username or password.');
        }
    }

    function signUp() {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        if (!users[username]) {
            users[username] = password;
            books[username] = [];
            alert('User registered successfully.');
        } else {
            alert('Username already exists.');
        }
    }

    function addBook() {
        const bookName = document.getElementById('book-name').value;
        const username = sessionStorage.getItem('username');

        if (bookName) {
            books[username].push(bookName);
            displayBooks(username);
            document.getElementById('book-name').value = '';
        } else {
            alert('Book name cannot be empty.');
        }
    }

    function displayBooks(username) {
        bookList.innerHTML = '';
        books[username].forEach((book, index) => {
            const li = document.createElement('li');
            li.textContent = book;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => {
                books[username].splice(index, 1);
                displayBooks(username);
            };
            li.appendChild(removeButton);
            bookList.appendChild(li);
        });
    }

    function showBookManager(username) {
        userSpan.textContent = username;
        authDiv.style.display = 'none';
        bookManagerDiv.style.display = 'block';
        displayBooks(username);
    }

    function logout() {
        sessionStorage.removeItem('username');
        authDiv.style.display = 'block';
        bookManagerDiv.style.display = 'none';
    }

    // Check if the user is already logged in
    const loggedInUser = sessionStorage.getItem('username');
    if (loggedInUser) {
        showBookManager(loggedInUser);
    }

    window.login = login;
    window.signUp = signUp;
    window.addBook = addBook;
    window.logout = logout;
});
