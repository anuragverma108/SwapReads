document.addEventListener("DOMContentLoaded", function () {
    const toastMessage = document.getElementById("toastMessage");

    document.getElementById("submit-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        let selectedEmoji = document.querySelector('input[name="rate"]:checked'); // Get selected emoji
        let feedback = document.getElementById("feedback").value.trim(); // Get feedback value

        if (selectedEmoji !== null && feedback !== "") { // Check if emoji is selected and feedback is provided
            // Show success toast message
            toastMessage.textContent = "Feedback submitted successfully :)";
            toastMessage.style.backgroundColor = "green"; // Green color for success
            toastMessage.style.color = "white";
            toastMessage.style.display = "block"; // Show the toast message

            // Hide toast message after 3 seconds
            setTimeout(function () {
                toastMessage.style.display = "none"; // Hide after 3 seconds
            }, 3000);

            // Reset form fields
            document.getElementById("feedback").value = ""; // Clear feedback
            selectedEmoji.checked = false; // Uncheck the selected emoji
        } else {
            // Show failure toast message
            toastMessage.textContent = "Select Emoji and give Feedback :(";
            toastMessage.style.backgroundColor = "red"; // Red color for failure
            toastMessage.style.color = "white";
            toastMessage.style.display = "block"; // Show the toast message

            // Hide toast message after 3 seconds
            setTimeout(function () {
                toastMessage.style.display = "none"; // Hide after 3 seconds
            }, 3000);
        }
    });
});
