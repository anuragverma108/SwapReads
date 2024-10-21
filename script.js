// Get user details from session storage and set as username
function setUsername() {
  const userCreds = JSON.parse(sessionStorage.getItem("user-info"));
  const userId = document.getElementById("login");
  const logout = document.getElementById("logout");
  if (userCreds) {
    userId.textContent = userCreds.username;
    logout.hidden = false;
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  setUsername();
  
  const learnMoreLink = document.getElementById("learn-more-link");
  const showLessLink = document.getElementById("show-less-link");
  const learnMoreContent = document.getElementById("learn-more-content");
  const acceptButton = document.querySelector(".accept-cookies");
  const rejectButton = document.querySelector(".reject-cookies");
  const cookieConsent = document.getElementById("cookie-consent");
  const closeButton = document.getElementById("closeBtn");

  // Toggle learn more content visibility
  learnMoreLink.addEventListener("click", (event) => {
    event.preventDefault();
    toggleLearnMoreContent(true);
  });

  // Toggle less content visibility
  showLessLink.addEventListener("click", (event) => {
    event.preventDefault();
    toggleLearnMoreContent(false);
  });

  function toggleLearnMoreContent(show) {
    learnMoreContent.style.display = show ? "block" : "none";
    learnMoreLink.style.display = show ? "none" : "inline";
    showLessLink.style.display = show ? "inline" : "none";
  }

  // Cookie consent actions
  const hideCookieConsent = () => {
    cookieConsent.style.display = "none";
    sessionStorage.setItem("cookieBannerDismissed", "true");
  };

  acceptButton.addEventListener("click", hideCookieConsent);
  rejectButton.addEventListener("click", hideCookieConsent);
  closeButton.addEventListener("click", hideCookieConsent);

  // Check if the cookie consent banner was dismissed previously
  if (sessionStorage.getItem("cookieBannerDismissed")) {
    cookieConsent.style.display = "none";
  }

  // Form submission
  const connectReaderBtn = document.getElementById("connectReaderBtn");
  connectReaderBtn.addEventListener("click", submitForm);
});

function submitForm() {
  const isTitleValid = validateBookTitle();
  const isAuthorValid = validateBookAuthor();
  const isPriceValid = validatePriceInput();

  if (isTitleValid && isAuthorValid && isPriceValid) {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Form submitted successfully.",
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        resetForm();
      }
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please correct the errors in the form before submitting.",
    });
  }
}

function resetForm() {
  const fields = ["bookTitle", "bookAuthor", "yourPrice"];
  fields.forEach(field => {
    document.getElementById(field).value = "";
    document.getElementById(`${field}-error`).textContent = "";
  });
  document.getElementById("connectReaderBtn").disabled = true;
}