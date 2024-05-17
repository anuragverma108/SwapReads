document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    // Listen for the window load event
    window.addEventListener('load', function() {
        // Set a delay before transitioning the preloader and main content
        setTimeout(function() {
            preloader.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible');
        }, 3000); // 2000 milliseconds = 2 seconds delay
    });
});
