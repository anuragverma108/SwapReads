document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    let selectedEmoji = document.querySelector('input[name="rate"]:checked');
    let feedback = document.getElementById("feedback").value.trim();
    
    if (selectedEmoji && feedback !== "") {
        // Logic for submitting feedback (you can add AJAX request here if needed)

        // Show toast message
        let toastMessage = document.getElementById("toastMessage");
        toastMessage.textContent = "Feedback submitted successfully :)";
        toastMessage.style.display = "block";

        // Hide toast message after 3 seconds (adjust as needed)
        setTimeout(function() {
            toastMessage.style.display = "none";
        }, 3000);

        // Reset form fields
        document.getElementById("feedback").value = "";
        let starInputs = document.querySelectorAll('input[name="rate"]');
        starInputs.forEach(input => {
            input.checked = false;
        });
    } else {
        let toastMessage = document.getElementById("toastMessage");
        toastMessage.textContent = "Select Emoji and give Feedback :(";
        toastMessage.style.display = "block";

        // Hide toast message after 3 seconds (adjust as needed)
        setTimeout(function() {
            toastMessage.style.display = "none";
        }, 3000);
        document.getElementById("feedback").value = "";
        let starInputs = document.querySelectorAll('input[name="rate"]');
        starInputs.forEach(input => {
            input.checked = false;
        });
      
    }
});
