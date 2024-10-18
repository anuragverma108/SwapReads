
/* COPY INPUT VALUES TO CARD */
const bounds = document.querySelectorAll('[data-bound]');

for(let i = 0; i < bounds.length; i++) {
  const targetId = bounds[i].getAttribute('data-bound');
  const defValue = bounds[i].getAttribute('data-def');
  const targetEl = document.getElementById(targetId);
  bounds[i].addEventListener('keyup', () => targetEl.innerText = bounds[i].value || defValue );
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
    timer: 2000
  });
}

document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form
  showNotification('Payment confirmed! Your order is being processed.');
});

const interval = setInterval(tick, 1000);
tick();
