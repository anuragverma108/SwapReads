/*
gets user details from session storage ans sets it as username
*/
function setusername() {
  const usercreds = JSON.parse(sessionStorage.getItem("user-info"));
  const userid = document.getElementById("login");
  const logout = document.getElementById("logout");
  if (usercreds) {
    userid.innerHTML = usercreds.username;
    logout.toggleAttribute("style");
  }
}

window.addEventListener("load", setusername);

document.addEventListener("DOMContentLoaded", function () {
  var learnMoreLink = document.getElementById("learn-more-link");
  var showLessLink = document.getElementById("show-less-link");
  var learnMoreContent = document.getElementById("learn-more-content");
  var acceptButton = document.querySelector(".accept-cookies");
  var rejectButton = document.querySelector(".reject-cookies");
  var cookieConsent = document.getElementById("cookie-consent");
  var closeButton = document.getElementById("closeBtn");

  // Toggle learn more content visibility
  learnMoreLink.addEventListener("click", function (event) {
    event.preventDefault();
    learnMoreContent.style.display = "block";
    learnMoreLink.style.display = "none";
    showLessLink.style.display = "inline"; // Show "Show Less" link
  });

  // Toggle less content visibility
  showLessLink.addEventListener("click", function (event) {
    event.preventDefault();
    learnMoreContent.style.display = "none";
    learnMoreLink.style.display = "inline"; // Show "Learn More" link
    showLessLink.style.display = "none"; // Hide "Show Less" link
  });

  // Accept cookies action
  acceptButton.addEventListener("click", function () {
    // Add your logic for accepting cookies here (e.g., setting cookies)
    hideCookieConsent();
  });

  // Reject cookies action
  rejectButton.addEventListener("click", function () {
    // Add your logic for rejecting cookies here (e.g., disabling non-essential cookies)
    hideCookieConsent();
  });

  // Close button action
  closeButton.addEventListener("click", function () {
    hideCookieConsent();
  });

  // Function to hide the cookie consent banner
  function hideCookieConsent() {
    cookieConsent.style.display = "none";
    sessionStorage.setItem("cookieBannerDismissed", "true");
  }

  // Check if the cookie consent banner was dismissed previously
  if (sessionStorage.getItem("cookieBannerDismissed")) {
    cookieConsent.style.display = "none";
  }
});

function submitForm() {
  const isTitleValid = validateBookTitle();
  const isAuthorValid = validateBookAuthor();
  const isPriceValid = validatePriceInput();

  if (isTitleValid && isAuthorValid && isPriceValid) {
    // Perform your form submission logic here (e.g., AJAX request or other actions)
    // For demonstration, we'll simulate a success message with SweetAlert
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Form submitted successfully.",
    }).then((result) => {
      // Optionally, reset the form or perform other actions after submission
      if (result.isConfirmed || result.isDismissed) {
        resetForm(); // Example function to reset form fields
      }
    });
  } else {
    // Display an error message if form validation fails
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please correct the errors in the form before submitting.",
    });
  }
}

function resetForm() {
  // Example function to reset form fields and error messages
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("yourPrice").value = "";
  document.getElementById("bookTitle-error").textContent = "";
  document.getElementById("bookAuthor-error").textContent = "";
  document.getElementById("yourPrice-error").textContent = "";
  document.getElementById("connectReaderBtn").disabled = true; // Disable submit button after reset
}

// Event listener for the submit button
document
  .getElementById("connectReaderBtn")
  .addEventListener("click", function () {
    submitForm();
  });
