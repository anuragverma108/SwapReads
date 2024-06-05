const allStars = document.querySelectorAll('.star');
const submitButton = document.getElementById('submit_rating');
const starRating = document.querySelector('.star_rating');
const ratingHeading = document.querySelector('.rating_heading');
let current_rating = document.querySelector('.current_rating');
const rateUsModal = document.querySelector(".rate-us-modal")
const rateUsModalWrapper = document.querySelector(".rate-us-modal-wrapper")
const thankYouMessage = document.querySelector(".thank_you_message");

let isStarClicked = false;
allStars.forEach((star, i) => {
    star.onclick = function() {
        let currentStar_level = i + 1;
        current_rating.innerText = `${currentStar_level} of 5`;
        allStars.forEach((star, j) => {
            if (currentStar_level >= j + 1) {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }
        });
            // Enable submit button when a star is clicked
            isStarClicked = true;
            submitButton.style.display = 'block';
    };
});
submitButton.onclick = function() {
    // Hide star rating section
    starRating.style.display = 'none';
    // Hide rating heading
    ratingHeading.style.display = 'none';
    // Hide submit button
    submitButton.style.display = 'none';
    // Display thank you message
    thankYouMessage.style.display = 'block';
};


function openRateUsModal() {
    document.querySelector('.rate-us-modal-wrapper').style.display = 'flex';
}

function closeRateUsModal() {
    document.querySelector('.rate-us-modal-wrapper').style.display = 'none';
}
