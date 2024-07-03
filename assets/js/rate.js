// Function to handle submission and display confirmation modal
document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Placeholder logic for submitting feedback
    let feedback = document.getElementById("feedback").value.trim();
    if (feedback !== "") {
        document.getElementById("confirmationMessage").textContent = "Feedback submitted successfully!";
        openConfirmationModal();
        // Additional logic here for processing the feedback as needed
    } else {
        document.getElementById("confirmationMessage").textContent = "Please enter your feedback!";
        openConfirmationModal();
    }
});

// Function to open confirmation modal
function openConfirmationModal() {
    document.getElementById("confirmationModal").style.display = "block";
}
// Function to close confirmation modal and reset form
function closeConfirmationModal() {
    document.getElementById("confirmationModal").style.display = "none";
    document.getElementById("feedback").value = ""; // Clear the feedback input field
    
    // Clear the star rating input (radio buttons)
    let starInputs = document.querySelectorAll('input[name="rate"]');
    starInputs.forEach(input => {
        input.checked = false;
    });
}
