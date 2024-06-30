document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            sections.forEach(section => {
                section.style.display = section.id === targetSection ? 'block' : 'none';
            });
        });
    });

    const users = [
        { username: 'David', location: 'New York', genres: 'Fiction, Mystery', books: 'The Great Gatsby, Sherlock Holmes', interests: 'Fiction, Mystery' },
        { username: 'Anurag', location: 'Los Angeles', genres: 'Science Fiction, Fantasy', books: 'Dune, Lord of the Rings', interests: 'Sci-Fi, Fantasy' },
        { username: 'Aman', location: 'Chicago', genres: 'Non-Fiction, Biography', books: 'Steve Jobs, The Wright Brothers', interests: 'Non-Fiction, Biography' },
        { username: 'Rajesh', location: 'Houston', genres: 'Romance, Drama', books: 'Pride and Prejudice, Jane Eyre', interests: 'Romance, Drama' },
        { username: 'John', location: 'San Francisco', genres: 'Horror, Thriller', books: 'Dracula, The Shining', interests: 'Horror, Thriller' }
    ];

    const currentUser = { username: 'Alice', connections: [] };
    const messages = {};

    const userList = document.getElementById('user-list');
    const searchBar = document.getElementById('search-bar');
    const connectionsList = document.getElementById('connections-list');
    const messageInput = document.getElementById('message-input');
    const sendMessageButton = document.getElementById('send-btn');
    const chatWindow = document.getElementById('chat-window');
    const chatList = document.getElementById('chat-list');
    const connectButton = document.getElementById('connect-btn');

    const commonQuestions = [
        { question: 'What are your favorite books?', answer: 'My favorite books are The Great Gatsby and Sherlock Holmes.' },
        { question: 'What is your review about the book you read?', answer: 'I loved the book! It was captivating and well-written.' },
        { question: 'Can you suggest me the next book to read?', answer: 'Sure! You should try reading Dune or Lord of the Rings.' }
    ];

    function displayUsers(filter = '') {
        userList.innerHTML = '';
        users.filter(user => user.interests.toLowerCase().includes(filter.toLowerCase()) && user.username !== currentUser.username)
             .forEach(user => {
                 const userItem = document.createElement('div');
                 userItem.classList.add('user-item');
                 userItem.innerHTML = `<h4>${user.username}</h4>
                                       <p>Location: ${user.location}</p>
                                       <p>Genres: ${user.genres}</p>
                                       <p>Books: ${user.books}</p>
                                       <button class="connect-btn" data-username="${user.username}">Connect</button>`;
                 userList.appendChild(userItem);
             });
    }

    function updateConnections() {
        connectionsList.innerHTML = `<h3>Connections:</h3>`;
        chatList.innerHTML = '';
        currentUser.connections.forEach(connection => {
            const connectionItem = document.createElement('p');
            connectionItem.textContent = connection;
            connectionsList.appendChild(connectionItem);

            const chatItem = document.createElement('button');
            chatItem.classList.add('chat-btn');
            chatItem.textContent = connection;
            chatItem.setAttribute('data-username', connection);
            chatList.appendChild(chatItem);
        });
    }

    function displayMessages(username) {
        chatWindow.innerHTML = '';
        const chat = messages[username] || [];
        chat.forEach(message => {
            const messageItem = document.createElement('div');
            messageItem.textContent = `${message.sender}: ${message.text}`;
            chatWindow.appendChild(messageItem);
        });
    }

    displayUsers();
    updateConnections();

    searchBar.addEventListener('input', (e) => {
        displayUsers(e.target.value);
    });

    userList.addEventListener('click', (e) => {
        if (e.target.classList.contains('connect-btn')) {
            const username = e.target.getAttribute('data-username');
            if (!currentUser.connections.includes(username)) {
                currentUser.connections.push(username);
                messages[username] = [];
                updateConnections();
                alert(`Connected with ${username}`);
            } else {
                alert(`Already connected with ${username}`);
            }
        }
    });

    sendMessageButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            const chatUsername = chatList.querySelector('.active')?.getAttribute('data-username');
            if (chatUsername) {
                const chat = messages[chatUsername];
                let reply = null;

                // Check for common questions and send predefined answers
                const matchedQuestion = commonQuestions.find(q => message.toLowerCase().includes(q.question.toLowerCase()));
                if (matchedQuestion) {
                    reply = matchedQuestion.answer;
                } else {
                    reply = `You said: ${message}`;
                }

                chat.push({ sender: currentUser.username, text: message });
                displayMessages(chatUsername);
                messageInput.value = '';

                // Simulate receiving a reply after 1 second
                setTimeout(() => {
                    chat.push({ sender: chatUsername, text: reply });
                    displayMessages(chatUsername);
                }, 1000);
            } else {
                alert('Select a chat first');
            }
        }
    });

    chatList.addEventListener('click', (e) => {
        if (e.target.classList.contains('chat-btn')) {
            chatList.querySelectorAll('.chat-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const username = e.target.getAttribute('data-username');
            displayMessages(username);
        }
    });
});
