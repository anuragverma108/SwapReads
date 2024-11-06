/* COPY INPUT VALUES TO CARD */
const bounds = document.querySelectorAll('[data-bound]');

for (let i = 0; i < bounds.length; i++) {
  const targetId = bounds[i].getAttribute('data-bound');
  const defValue = bounds[i].getAttribute('data-def');
  const targetEl = document.getElementById(targetId);
  bounds[i].addEventListener('keyup', () => targetEl.innerText = bounds[i].value || defValue);
}

/* TOGGLE CVC DISPLAY MODE */
const cvc_toggler = document.getElementById('cvc_toggler');

cvc_toggler.addEventListener('click', () => {
  const target = cvc_toggler.getAttribute('data-target');
  const el = document.getElementById(target);
  el.setAttribute('type', el.type === 'text' ? 'password' : 'text');
});

const timer = document.querySelector('[data-id=timer]');
let timeLeft = 5 * 60;

const tick = () => {
  if (timeLeft >= 0) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Display the minutes
    timer.children[0].innerText = Math.floor(minutes / 10); // First digit of minutes
    timer.children[1].innerText = minutes % 10; // Second digit of minutes

    // Display the seconds
    timer.children[3].innerText = Math.floor(seconds / 10); // First digit of seconds
    timer.children[4].innerText = seconds % 10; // Second digit of seconds

    timeLeft--;
  } else {
    clearInterval(interval); // Stop the timer when time is up
  }
}

function showNotification(message) {
  Swal.fire({
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 3000
  });

  // Redirect to the homepage after notification
  setTimeout(() => {
    window.location.href = '/'; // Update this with the actual home page URL
  }, 2000); // Matches the timer duration of the notification
}

document.getElementById('paymentForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  showNotification('Payment confirmed! Your order is being processed.');
});

const interval = setInterval(tick, 1000);
tick();



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