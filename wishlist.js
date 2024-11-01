const bookTitleInput = document.getElementById('book-title');
const addBookBtn = document.getElementById('add-book-btn');
const bookList = document.getElementById('book-list');

let books = JSON.parse(localStorage.getItem('books')) || [];

addBookBtn.addEventListener('click', addBook);

function addBook() {
    const title = bookTitleInput.value.trim();
    if (title) {
        const book = { title, read: false };
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        renderBookList();
        bookTitleInput.value = '';
    }
}

function renderBookList() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('book-item');
        const readClass = book.read ? 'read' : '';
        bookItem.innerHTML = `
            <span class="${readClass}">${index + 1}. ${book.title}</span>
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