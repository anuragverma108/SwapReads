// Countdown timer
let countdown = 5;
const countdownElement = document.getElementById('countdown');

const interval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;
    if (countdown <= 0) {
        clearInterval(interval);
        window.location.href = 'index.html';
    }
}, 1000);
