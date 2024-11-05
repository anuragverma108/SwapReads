const reviewsContainer = document.getElementById('reviews-container');
const reviewForm = document.getElementById('review-form');
const starRating = document.getElementById('star-rating');
let ratingValue = 0; // To store the selected rating

// Add click event listeners to the stars
starRating.addEventListener('click', function(event) {
    if (event.target.dataset.value) {
        ratingValue = event.target.dataset.value; // Get the value of the clicked star
        updateStars(ratingValue); // Update the star display
    }
});

// Function to update the stars based on the selected rating
function updateStars(selectedRating) {
    const stars = starRating.querySelectorAll('span');
    stars.forEach(star => {
        star.classList.remove('filled'); // Remove filled class from all stars
        if (parseInt(star.dataset.value) <= selectedRating) {
            star.classList.add('filled'); // Add filled class to selected stars
        }
    });
}

reviewForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const reviewText = document.getElementById('review').value;

    addReview(name, reviewText, ratingValue);

    // Reset form
    reviewForm.reset();
    ratingValue = 0; // Reset rating value
    updateStars(0); // Reset star display
});

function addReview(name, reviewText, rating) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';

    reviewCard.innerHTML = `
        <div class="profile">
            <div class="profile-img">
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="profile-img">
            </div>
            <div>
                <h3>${name}</h3>
                <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
            </div>
        </div>
        <p>${reviewText}</p>
    `;

    reviewsContainer.appendChild(reviewCard);
}
