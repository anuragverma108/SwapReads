document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    // Listen for the window load event
    window.addEventListener('load', ()=> {
        // Set a delay before transitioning the preloader and main content
        const body = document.body;
        body.classList.add("body-fixed")
        setTimeout(()=>{
            preloader.classList.add('hidden');
            console.log(body)
            body.classList.remove("body-fixed")
        }, 2000); // 2000 milliseconds = 2 seconds delay
    });
});
