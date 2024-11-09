// Show the pop-up automatically when the page loads
window.onload = function () {
  if (!sessionStorage.getItem("popupDisplayed")) {
    document.getElementById("popup-nl").style.display = "flex";
    sessionStorage.setItem("popupDisplayed", "true"); // Set flag to indicate popup has been shown
  }
};

// Close the pop-up when the user clicks the close button
document.querySelector(".close-nl").addEventListener("click", function () {
  document.getElementById("popup-nl").style.display = "none";
});

// Close the pop-up when clicking outside the pop-up content
window.addEventListener("click", function (event) {
  const popupContent = document.querySelector(".popup-content"); // Select the popup content
  if (
    event.target === document.getElementById("popup-nl") &&
    !popupContent.contains(event.target)
  ) {
    document.getElementById("popup-nl").style.display = "none";
  }
});

// Handle form submission
document
  .getElementById("emailForm-nl")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email-nl").value;
    if (email) {
      alert(
        `Your email ID ${email} has been registered successfully for the newsletter.`
      );
      document.getElementById("popup-nl").style.display = "none"; // Close popup after successful submission
    }
  });

// Handle "No thanks" link
document
  .querySelector(".no-thanks-nl")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("popup-nl").style.display = "none";
  });
