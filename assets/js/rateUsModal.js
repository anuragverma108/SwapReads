const allStars = document.querySelectorAll('.star');
const submitButton = document.getElementById('submit_rating');
const starRating = document.querySelector('.star_rating');
const ratingHeading = document.querySelector('.rating_heading');
let current_rating = document.querySelector('.current_rating');
const rateUsModal = document.querySelector(".rate-us-modal")
const rateUsModalWrapper = document.querySelector(".rate-us-modal-wrapper")
const thankYouMessage = document.querySelector(".thank_you_message");

let selectedRating = 0;

allStars.forEach((star, i) => {
    star.onclick = function () {
        selectedRating = i + 1;
        current_rating.innerText = `${selectedRating} of 5`;
        updateStars(selectedRating);
        // Enable submit button when a star is clicked
        submitButton.style.display = 'block';
    };

    star.onmouseenter = function () {
        updateStars(i + 1);
    };

    star.onmouseleave = function () {
        updateStars(selectedRating);
    };
});

function updateStars(rating) {
    allStars.forEach((star, j) => {
        if (rating >= j + 1) {
            star.innerHTML = '&#9733';
        } else {
            star.innerHTML = '&#9734';
        }
    });
}

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


const openRateUsModal = ()=>{
    rateUsModalWrapper.style.display = "flex";
   
    document.body.classList.add("rate-us-modal-open")
}

const closeRateUsModal = ()=>{
    rateUsModalWrapper.style.display = "none";
    document.body.classList.remove("rate-us-modal-open")
}