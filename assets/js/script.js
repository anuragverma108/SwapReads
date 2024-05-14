'use strict';

//  add event on send message button
const sendMessageBtn = document.getElementById('sendMessageBtn');

document.addEventListener('DOMContentLoaded', (event) => {
  const contactFormDetails = document.getElementById('contact-form');

  sendMessageBtn.addEventListener('click', function (e) {

    const name = contactFormDetails['name'].value;
    const email = contactFormDetails['email_address'].value;
    const subject = contactFormDetails['subject'].value;
    const message = contactFormDetails['message'].value;

    e.preventDefault();

    if (name === '' || email === '' || message === '' || subject === '') {
      alert('Please fill in all fields.');
    } else {
      alert('Message sent successfully!');
      console.log('Name: ' + name + ' Email: ' + email + ' Message: ' + message + ' Subject: ' + subject);
    }
    return false; // Prevent page refresh
  });
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
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnelem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnelem(navbarLinks, "click", closeNavbar);
// Function to toggle between light and dark mode
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Toggle the data-theme attribute on the root element
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Update the logo image source based on the new theme
  const logo = document.querySelector('.logopic');
  if (newTheme === 'dark') {
    logo.src = "./assets/images/logoPicLight.png";
  } else {
    logo.src = "./assets/images/logoPicDark.png";
  }
}

// Example of toggling theme when clicking a button
const themeToggleButton = document.getElementById('theme-icon');
themeToggleButton.addEventListener('click', toggleTheme);




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
  }
}