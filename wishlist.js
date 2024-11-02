const bookTitleInput = document.getElementById('book-title');
const authorTitleInput = document.getElementById('author-name');
const addBookBtn = document.getElementById('add-book-btn');
const bookList = document.getElementById('book-list');

let books = JSON.parse(localStorage.getItem('books')) || [];

addBookBtn.addEventListener('click', addBook);

function addBook() {
    const title = bookTitleInput.value.trim();
    const author = authorTitleInput.value.trim();
    ('error-message');
    if (!title || !author) {
        alert('Both Title and Author fields are required.');
        return;
    }

    // Capitalize the first letter of the author's and Book name
    const formattedAuthor = author.charAt(0).toUpperCase() + author.slice(1);

    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);


    // Add the book to the list of books
    const book = { title: formattedTitle, author: formattedAuthor, read: false };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    renderBookList();
    resetInputFields();

    // Refresh the page (Important to update the input box animation)
    location.reload();
    
}

// Function to reset the input fields
function resetInputFields() {
    bookTitleInput.value = '';
    authorTitleInput.value = '';
    bookTitleInput.style.width = '15%';
    authorTitleInput.style.width = '15%';
}

function renderBookList() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('book-item');
        const readClass = book.read ? 'read' : '';
        bookItem.innerHTML = `
                <span class="${readClass}">${index + 1}. ${book.title} <span class="author-space">By - ${book.author}</span></span>
                <div class="actions">
                    ${book.read ?
                `<button class="mark-as-unread-btn" onclick="toggleRead(${index})">Mark as Unread</button>` :
                `<button class="mark-as-read-btn" onclick="toggleRead(${index})">Mark as Read</button>`
            }
                    <button onclick="deleteBook(${index})">Delete</button>
                </div>
            `;
        bookList.appendChild(bookItem);
    });
}
function toggleRead(index) {
    books[index].read = !books[index].read;
    localStorage.setItem('books', JSON.stringify(books));
    renderBookList();
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    renderBookList();
}

renderBookList();



// Function to go back to the previous page
function goBack() {
    window.history.back();
}



//title input field width

bookTitleInput.addEventListener('input', function () {
    if (this.value.length > 0) {
        this.style.width = '50%';
    } else {
        this.style.width = '15%';
    }
});

// Optional: Add focus and blur events
bookTitleInput.addEventListener('focus', function () {
    this.style.width = '50%';
});

bookTitleInput.addEventListener('blur', function () {
    if (this.value.length === 0) {
        this.style.width = '15%';
    }
});


// Input field width for author
authorTitleInput.addEventListener('input', function () {
    if (this.value.length > 0) {
        this.style.width = '50%';
    } else {
        this.style.width = '15%';
    }
});

// Optional: Add focus and blur events for author input
authorTitleInput.addEventListener('focus', function () {
    this.style.width = '50%';
});

authorTitleInput.addEventListener('blur', function () {
    if (this.value.length === 0) {
        this.style.width = '15%';
    }
});