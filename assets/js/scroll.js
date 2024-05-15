// get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// when the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function () {
  // smooth scroll to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
