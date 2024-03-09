document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const bookListings = document.getElementById('bookListings');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterBooks(category);
            toggleActiveButton(button);
        });
    });

    function filterBooks(category) {
        const books = document.querySelectorAll('.book');
        books.forEach(book => {
            const bookCategory = book.getAttribute('data-category');
            if (category === 'all' || bookCategory === category) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    }

    function toggleActiveButton(clickedButton) {
        categoryButtons.forEach(button => {
            button.classList.remove('active');
        });
        clickedButton.classList.add('active');
    }

    // Sample book data - replace with actual data
    const sampleBooks = [
        { title: 'Book 1', author: 'Author 1', category: 'fiction' },
        { title: 'Book 2', author: 'Author 2', category: 'non-fiction' },
        { title: 'Book 3', author: 'Author 3', category: 'fantasy' },
        // Add more books as needed
    ];

    // Populate book listings
    sampleBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.setAttribute('data-category', book.category);
        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
        `;
        bookListings.appendChild(bookElement);
    });
});
