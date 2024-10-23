function showSuccessMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Assuming your backend is expecting a POST request to `/subscribe`
    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('successmessage').style.display = 'block';
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));

    return false; // Prevent default form submission
}
