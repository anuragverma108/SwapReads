'use strict';

//  add event on send message button
const sendMessageBtn = document.getElementById('sendMessageBtn');

document.addEventListener('DOMContentLoaded', (event) => {
  const contactFormDetails = document.getElementById('contact-form');
  const subjectField = contactFormDetails['subject'];
  const messageField = contactFormDetails['message'];

  // Function to update character count indicator for subject field
  function updateSubjectCharacterCount() {
    const maxLength = 100;
    const currentLength = subjectField.value.length;
    const subjectCountDisplay = document.getElementById('subject-count');
    
    subjectCountDisplay.style.color = currentLength > maxLength ? 'lightcoral' : 'hsl(20, 43%, 93%)';
    subjectCountDisplay.textContent = currentLength + '/' + maxLength;
  }

  // Function to update character count indicator for message field
  function updateMessageCharacterCount() {
    const maxLength = 250;
    const currentLength = messageField.value.length;
    const messageCountDisplay = document.getElementById('message-count');
    messageCountDisplay.style.color = currentLength > maxLength ? 'red' : 'hsl(20, 43%, 93%)';
    messageCountDisplay.textContent = currentLength + '/' + maxLength;
  }

  // Add event listener to subject field for input event
  subjectField.addEventListener('input', updateSubjectCharacterCount);

  // Add event listener to message field for input event
  messageField.addEventListener('input', updateMessageCharacterCount);

  sendMessageBtn.addEventListener('click', function (e) {
    const name = contactFormDetails['name'].value;
    const email = contactFormDetails['email_address'].value;
    const subject = subjectField.value;
    const message = messageField.value;

    e.preventDefault();

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if email format is valid
    if (!emailRegex.test(email)) {
      displayErrorMessage('Please enter a valid email address.');
      return;
    }

    // Check character limits for subject and message
    if (subject.length > 100) {
      displayErrorMessage('Subject must be within 100 characters.');
      return;
    }
    if (message.length > 250) {
      displayErrorMessage('Message must be within 250 characters.');
      return;
    }

    // Check if any field is empty
    if (name === '' || email === '' || message === '' || subject === '') {
      displayErrorMessage('Please fill in all fields.');
    } else {
      sendMessageBtn.disabled = true; // Disable the send button
      displaySuccessMessage('Message sent successfully!');
      console.log('Name: ' + name + ' Email: ' + email + ' Message: ' + message + ' Subject: ' + subject);
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    }
    return false; // Prevent page refresh
  });

  // Function to display error message
  function displayErrorMessage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    contactFormDetails.appendChild(errorMessage);

    // Remove error message after 2 seconds
    setTimeout(function () {
      sendMessageBtn.disabled = false;
      errorMessage.remove();
    }, 2000);
    sendMessageBtn.disabled = true;
  }

  // Function to display success message
  function displaySuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.textContent = message;
    successMessage.classList.add('success-message');
    contactFormDetails.appendChild(successMessage);

    // Remove success message after 2 seconds
    setTimeout(function () {
      sendMessageBtn.disabled = false;
      successMessage.remove();
    }, 2000);
    sendMessageBtn.disabled = true;
  }
});

/**
 * add event on element
 */

const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * Toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");
const logoImage = document.querySelector('.logopic');
const themeSwitch = document.getElementById('switch');

// Get the current theme from localStorage or default to 'light'
let currentTheme = localStorage.getItem('currentTheme') || 'light';

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

const toggleTheme = function () {
  if (currentTheme === 'light') {
    logoImage.src = './assets/images/logo_darkbg.png';
    currentTheme = 'dark';
  } else {
    logoImage.src = './assets/images/logo_whitebg.png';
    currentTheme = 'light';
  }
  // Save the current theme to localStorage
  localStorage.setItem('currentTheme', currentTheme);
}

// Set the initial logo image based on the current theme
if (currentTheme === 'dark') {
  logoImage.src = './assets/images/logoPicDark.png';
} else {
  logoImage.src = './assets/images/logo_whitebg.png';
}

addEventOnelem(navToggler, 'click', toggleNavbar);
addEventOnelem(navbarLinks, "click", closeNavbar);
themeSwitch.addEventListener('change', toggleTheme);




/**
 * header active on scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnelem(window, "scroll", activeHeader);



/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
}

addEventOnelem(tabCard, "click", navigateTab);

// Book Exchange Hub 
function validateAndConnect() {
  var bookTitle = document.getElementById('bookTitle').value;
  var bookAuthor = document.getElementById('bookAuthor').value;
  var yourPrice = document.getElementById('yourPrice').value;

  if (bookTitle === '' || bookAuthor === '' || yourPrice === '') {
    swal("Try Again!","Please fill all the details.","warning");
  } else {
    swal("Request received!", "We will let you know as soon as we find a reader with your requested book.","success");
    document.getElementById('bookTitle').value='';
    document.getElementById('bookAuthor').value='';
    document.getElementById('yourPrice').value='';
  }
}