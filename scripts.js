// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js') // Pointing to the sw.js file
            .then(registration => {
                console.log('ServiceWorker registration successful:', registration);
            })
            .catch(error => {
                console.error('ServiceWorker registration failed:', error);
            });
    });


}

