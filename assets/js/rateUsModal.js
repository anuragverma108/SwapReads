const allStars = document.querySelectorAll('.star');
const submitButton = document.getElementById('submit_rating');
const starRating = document.querySelector('.star_rating');
const ratingHeading = document.querySelector('.rating_heading');
let current_rating = document.querySelector('.current_rating');
const rateUsModal = document.querySelector(".rate-us-modal");
const rateUsModalWrapper = document.querySelector(".rate-us-modal-wrapper");

let currentStarLevel = 0;

allStars.forEach((star, i) => {
    star.onclick = function() {
        currentStarLevel = i + 1;
        current_rating.innerText = `${currentStarLevel} of 5`;
        allStars.forEach((star, j) => {
            if (currentStarLevel >= j + 1) {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }
        });
    };
});

submitButton.onclick = function() {
    if (currentStarLevel > 0) {
        starRating.style.display = 'none';
        ratingHeading.style.display = 'none';
        submitButton.style.display = 'none';
        const thankYouMessage = '<p class="thank_you_message">Thank you!</p>';
        rateUsModal.innerHTML += thankYouMessage;
    } else {
        alert('Please select a rating before submitting.');
    }
};

const openRateUsModal = () => {
    rateUsModalWrapper.style.display = "flex";
    document.body.classList.add("rate-us-modal-open");
}

const closeRateUsModal = () => {
    rateUsModalWrapper.style.display = "none";
    document.body.classList.remove("rate-us-modal-open");
}
