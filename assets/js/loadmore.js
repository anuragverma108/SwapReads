document.addEventListener("DOMContentLoaded", function () {
    const genreList = document.getElementById("genre-list");
    const loadMoreButton = document.getElementById("load-more");
    const loadLessButton = document.getElementById("load-less");
    const items = genreList.children;
    let currentVisible = 6; // Initially show 6 items

    // Function to show items
    function showItems(count) {
        for (let i = 0; i < items.length; i++) {
            if (i < count) {
                items[i].style.display = "block";
            } else {
                items[i].style.display = "none";
            }
        }
    }

    // Initial display
    showItems(currentVisible);

    // Load more items
    loadMoreButton.addEventListener("click", function () {
        currentVisible += 6; // Increase count by 6
        showItems(currentVisible);

        // Hide Load More button if no more items
        if (currentVisible >= items.length) {
            loadMoreButton.style.display = "none"; // Hide Load More button if no more items
        }

        // Show Load Less button
        loadLessButton.style.display = "inline"; // Show Load Less button
    });

    // Load less items
    loadLessButton.addEventListener("click", function () {
        currentVisible = Math.max(6, currentVisible - 6); // Decrease count by 6 but not less than 6
        showItems(currentVisible);

        // Hide Load Less button if at initial state
        if (currentVisible <= 6) {
            loadLessButton.style.display = "none"; // Hide Load Less button if at initial state
        }

        // Show Load More button
        loadMoreButton.style.display = "inline"; // Show Load More button
    });
});