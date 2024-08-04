document.addEventListener("DOMContentLoaded", function() {
    const toastMessage = document.getElementById("toastMessage");

    document.getElementById("submit-btn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission

        let selectedEmoji = document.querySelector('input[name="rate"]:checked');
        let feedback = document.getElementById("feedback").value.trim();
        
        if (selectedEmoji && feedback !== "") {
            // Show success toast message
            toastMessage.textContent = "Feedback submitted successfully :)";
            toastMessage.style.backgroundColor = "green"; // Green color for success
            toastMessage.style.color = "white";
            toastMessage.style.padding = "10px";
            toastMessage.style.borderRadius = "5px";
            toastMessage.style.position = "fixed";
            toastMessage.style.bottom = "20px";
            toastMessage.style.right = "20px";
            toastMessage.style.zIndex = "1000";
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
            // Show failure toast message
            toastMessage.textContent = "Select Emoji and give Feedback :(";
            toastMessage.style.backgroundColor = "red"; // Red color for failure
            toastMessage.style.color = "white";
            toastMessage.style.padding = "10px";
            toastMessage.style.borderRadius = "5px";
            toastMessage.style.position = "fixed";
            toastMessage.style.bottom = "20px";
            toastMessage.style.right = "20px";
            toastMessage.style.zIndex = "1000";
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
});
