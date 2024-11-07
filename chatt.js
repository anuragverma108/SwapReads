const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const mediaButton = document.getElementById('media-button');

// Sample chat data
const chatData = [
    { username: 'John', message: 'Hello everyone!', timestamp: '10:00 AM', dp: './assets/images/avatar2.jpg' },
    { username: 'Ritu', message: 'Hi John!', timestamp: '10:01 AM', dp: './assets/images/avatar1.jpg' },
    { username: 'Admin', message: 'Welcome to SwapReads Community Chat!', timestamp: '10:02 AM', dp: './assets/images/avatar5.jpg' },
];

// Display initial chat messages
chatData.forEach((message) => {
    const messageHTML = `
        <div class="message ${message.username === 'You' ? 'right' : 'left'}">
            <img src="${message.dp}" class="dp">
            <span class="username">${message.username}:</span>
            <span class="message-text">${message.message}</span>
            <span class="timestamp">${message.timestamp}</span>
        </div>
    `;
    chatMessages.innerHTML += messageHTML;
});

// Send message functionality
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        const messageHTML = `
            <div class="message right">

                <span class="username"></span>
                <span class="message-text">${message}</span>
                <span class="timestamp">${formatTime(new Date())}</span>
            </div>
        `;
        chatMessages.innerHTML += messageHTML;
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        saveMessageToLocalStorage('You', message);
    }
});

// Format time to HH:MM
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}


// Media button functionality
mediaButton.addEventListener('click', () => {
    const mediaInput = document.createElement('input');
    mediaInput.type = 'file';
    mediaInput.accept = 'image/*, video/*';
    mediaInput.addEventListener('change', (e) => {
        const file = mediaInput.files[0];
        const mediaPreview = document.createElement('div');
        mediaPreview.className = 'media-preview';
        if (file.type.startsWith('image/')) {
            mediaPreview.innerHTML = `<img src="${URL.createObjectURL(file)}">`;
        } else {
            mediaPreview.innerHTML = `<video controls><source src="${URL.createObjectURL(file)}"></video>`;
        }
        chatMessages.appendChild(mediaPreview);
        saveMediaToLocalStorage(file);
    });
    mediaInput.click();
});

// Save message to local storage
function saveMessageToLocalStorage(username, message) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ username, message, timestamp: new Date().toLocaleTimeString() });
    localStorage.setItem('messages', JSON.stringify(messages));
}

// Save media to local storage
function saveMediaToLocalStorage(file) {
    const media = JSON.parse(localStorage.getItem('media')) || [];
    media.push(file);
    localStorage.setItem('media', JSON.stringify(media));
}


// Load messages from local storage
function loadMessagesFromLocalStorage() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach((message) => {
        const messageHTML = `
            <div class="message ${message.username === 'You' ? 'right' : 'left'}">
                <span class="username">${message.username}:</span>
                <span class="message-text">${message.message}</span>
                <span class="timestamp">${message.timestamp}</span>
            </div>
        `;
        chatMessages.innerHTML += messageHTML;
    });
}

// Call the function to load messages when the page loads
loadMessagesFromLocalStorage();



// Coordinates for the cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// Colors for the circles
const colors = [
  "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
  "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
  "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
  "#680060", "#60005f", "#48005f", "#3d005e"
];

// Assign colors and initial position to each circle
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

// Update the coordinates when the mouse moves
window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

// Animation function to move the circles
function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    // Update the position and scale of each circle
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    // Get the next circle in the sequence
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.15;
    y += (nextCircle.y - y) * 0.15;
  });

  // Repeat the animation
  requestAnimationFrame(animateCircles);
}

// Start the animation
animateCircles();
