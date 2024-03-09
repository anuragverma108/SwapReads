document.addEventListener('DOMContentLoaded', function() {
    const userData = {
        userName: "John Doe",
        userBio: "Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        profilePic: "profile-pic.jpg",
        bookWishlist: ["Book 1", "Book 2", "Book 3"],
        pastSwapHistory: "No past swaps yet.",
        reviews: [
            { reviewer: "Jane Smith", rating: "4/5", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { reviewer: "John Smith", rating: "5/5", review: "Sed et maximus dolor. Donec condimentum risus quis ipsum fermentum." }
        ]
    };

    // Populate user profile data
    document.getElementById('userName').textContent = userData.userName;
    document.getElementById('userBio').textContent = userData.userBio;
    document.getElementById('profilePic').src = userData.profilePic;

    // Populate book wishlist
    const bookWishlistElement = document.getElementById('bookWishlist');
    userData.bookWishlist.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookWishlistElement.appendChild(li);
    });

    // Populate past swap history
    document.getElementById('pastSwapHistory').textContent = userData.pastSwapHistory;

    // Populate reviews
    const reviewsElement = document.getElementById('reviews');
    userData.reviews.forEach(review => {
        const div = document.createElement('div');
        div.classList.add('review');
        div.innerHTML = `
            <p>Reviewer: ${review.reviewer}</p>
            <p>Rating: ${review.rating}</p>
            <p>Review: ${review.review}</p>
        `;
        reviewsElement.appendChild(div);
    });
});
