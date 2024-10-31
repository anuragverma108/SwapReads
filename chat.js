// Import Firebase SDK components
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
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
const navbarToggleBtn = document.querySelector('.navbar-toggle');
const navbarMenu = document.getElementById('navbarMenu');

// Event Listeners
startChatBtn.addEventListener('click', startChat);
sendMessageBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', handleEnterPress);
backButton.addEventListener('click', handleBack);
navbarToggleBtn.addEventListener('click', toggleNav);
document.addEventListener('click', handleOutsideClick);

document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', closeNavMenu);
});

// Functions
function startChat() {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        userInputDiv.style.display = 'none';
        chatBoxDiv.style.display = 'block';
        loadMessages();
    } else {
        alert('Please enter a username');
    }
}

function handleEnterPress(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

function handleBack(e) {
    e.preventDefault();
    chatBoxDiv.style.display = 'none';
    userInputDiv.style.display = 'block';
    localStorage.removeItem('username');
}

async function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        const username = localStorage.getItem('username');
        const timestamp = new Date().toISOString();

        try {
            await addDoc(collection(db, 'messages'), {
                username,
                messageText,
                timestamp
            });
            messageInput.value = '';
        } catch (error) {
            console.error("Error adding message: ", error);
        }
    }
}

function loadMessages() {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    onSnapshot(q, (querySnapshot) => {
        messagesDiv.innerHTML = '';
        querySnapshot.forEach((doc) => {
            displayMessage(doc.data());
        });
    });
}

function displayMessage({ username, messageText, timestamp }) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = `
        <span class="username">${username}</span>: 
        ${messageText} 
        <span class="timestamp">(${new Date(timestamp).toLocaleString()})</span>
    `;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function toggleNav() {
    navbarMenu.classList.toggle('active');
}

function closeNavMenu() {
    navbarMenu.classList.remove('active');
}

function handleOutsideClick(event) {
    if (!navbarMenu.contains(event.target) && !navbarToggleBtn.contains(event.target)) {
        navbarMenu.classList.remove('active');
    }
}