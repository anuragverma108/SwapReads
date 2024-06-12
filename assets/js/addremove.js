document.addEventListener('DOMContentLoaded', () => {
    const authDiv = document.getElementById('auth');
    const bookManagerDiv = document.getElementById('book-manager');
    const userSpan = document.getElementById('user');
    const bookList = document.getElementById('book-list');

    function getUsers() {
        return JSON.parse(localStorage.getItem('users')) || {};
    }

    function getBooks(username) {
        return JSON.parse(localStorage.getItem(`books_${username}`)) || [];
    }

    function setUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    function setBooks(username, books) {
        localStorage.setItem(`books_${username}`, JSON.stringify(books));
    }

    function login() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const users = getUsers();

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
        const users = getUsers();

        if (!users[username]) {
            users[username] = password;
            setUsers(users);
            setBooks(username, []);
            alert('User registered successfully.');
        } else {
            alert('Username already exists.');
        }
    }

    function addBook() {
        const bookName = document.getElementById('book-name').value;
        const username = sessionStorage.getItem('username');

        if (bookName) {
            const userBooks = getBooks(username);
            userBooks.push(bookName);
            setBooks(username, userBooks);
            displayBooks(username);
            document.getElementById('book-name').value = '';
        } else {
            alert('Book name cannot be empty.');
        }
    }

    function displayBooks(username) {
        const userBooks = getBooks(username);
        bookList.innerHTML = '';
        userBooks.forEach((book, index) => {
            const li = document.createElement('li');
            const bookText = document.createElement('span');
            bookText.textContent = book;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => {
                userBooks.splice(index, 1);
                setBooks(username, userBooks);
                displayBooks(username);
            };
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = () => {
                const newBookName = prompt('Enter new book name:', book);
                if (newBookName) {
                    userBooks[index] = newBookName;
                    setBooks(username, userBooks);
                    displayBooks(username);
                }
            };
            li.appendChild(bookText);
            li.appendChild(editButton);
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
