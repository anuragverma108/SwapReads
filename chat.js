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
