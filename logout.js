document.addEventListener("DOMContentLoaded", () => {
  // Load the avatar from local storage
  const savedAvatar = localStorage.getItem("selectedAvatar");
  if (savedAvatar) {
    document.getElementById(
      "profile-avatar"
    ).src = `./assets/images/${savedAvatar}`;
  }

  // Logout button and modal elements
  const btn = document.getElementById("logout-btn");
  const modal = document.getElementById("modal");
  const modalBox = document.querySelector(".modal-box");
  const cancelBtn = document.querySelector(".cancel-logout-btn");
  const logoutBtn = document.querySelector(".out-logout-btn");

  // Show modal when logout button is clicked
  btn.onclick = function () {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  };

  // Hide modal when cancel button is clicked
  cancelBtn.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  };

  logoutBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Hide modal when clicking outside of it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  };
});

function menuToggle() {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}
