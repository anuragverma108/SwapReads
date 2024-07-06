// Import Firebase SDK components
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, query, onSnapshot, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSuptEc82X5GVX3ykWA-j9L-zYQvNwEaI",
    authDomain: "swap-reads-92a6e.firebaseapp.com",
    projectId: "swap-reads-92a6e",
    storageBucket: "swap-reads-92a6e.appspot.com",
    messagingSenderId: "962202354873",
    appId: "1:962202354873:web:af96b3c7692e885ca6c768",
    measurementId: "G-3R8PM76438"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM Elements
const startChatBtn = document.getElementById('start-chat');
const sendMessageBtn = document.getElementById('send-message');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const userInputDiv = document.getElementById('user-input');
const chatBoxDiv = document.getElementById('chat-box');
const messagesDiv = document.getElementById('messages');
const backButton = document.getElementById('backbutton');

// Start Chat Button Event
startChatBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        userInputDiv.style.display = 'none';
        chatBoxDiv.style.display = 'block';
        loadMessages();
    } else {
        alert('Please enter a username');
    }
});

// Send Message Button Event
sendMessageBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Back Button Event
backButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    chatBoxDiv.style.display = 'none';
    userInputDiv.style.display = 'block';
    localStorage.removeItem('username'); // Optionally, clear the stored username
});

// Function to send a message to Firestore
async function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        const username = localStorage.getItem('username');
        const timestamp = new Date().toISOString();

        try {
            // Add message to Firestore
            await addDoc(collection(db, 'messages'), {
                username: username,
                messageText: messageText,
                timestamp: timestamp
            });
            messageInput.value = '';
        } catch (error) {
            console.error("Error adding message: ", error);
        }
    }
}

// Function to load and display messages from Firestore
function loadMessages() {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    onSnapshot(q, (querySnapshot) => {
        messagesDiv.innerHTML = ''; // Clear current messages
        querySnapshot.forEach((doc) => {
            const message = doc.data();
            displayMessage(message);
        });
    });
}

// Function to display a message
function displayMessage({ username, messageText, timestamp }) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = `<span class="username">${username}</span>: ${messageText} <span class="timestamp">(${new Date(timestamp).toLocaleString()})</span>`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the latest message
}

// Function to toggle the navbar menu visibility
function toggleNav() {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
}

// Adding event listener to the toggle button
const navbarToggleBtn = document.querySelector('.navbar-toggle');
navbarToggleBtn.addEventListener('click', toggleNav);

// Adding event listeners to navbar links to close the menu on click
const navbarLinks = document.querySelectorAll('.navbar-link');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarMenu = document.getElementById('navbarMenu');
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
    });
});

// Adding event listener to the document to close the menu when clicking outside
document.addEventListener('click', (event) => {
    const navbarMenu = document.getElementById('navbarMenu');
    const toggleBtn = document.querySelector('.navbar-toggle');
    if (!navbarMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
        navbarMenu.classList.remove('active');
    }
});


