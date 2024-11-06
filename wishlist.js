const bookTitleInput = document.getElementById("book-title");
const authorTitleInput = document.getElementById("author-name");
const addBookBtn = document.getElementById("add-book-btn");
const bookList = document.getElementById("book-list");

let books = JSON.parse(localStorage.getItem("books")) || [];

addBookBtn.addEventListener("click", addBook);

function addBook() {
  const title = bookTitleInput.value.trim();
  const author = authorTitleInput.value.trim();
  ("error-message");
  if (!title || !author) {
    alert("Both Title and Author fields are required.");
    return;
  }

  // Capitalize the first letter of the author's and Book name
  const formattedAuthor = author.charAt(0).toUpperCase() + author.slice(1);

  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  // Add the book to the list of books
  const book = { title: formattedTitle, author: formattedAuthor, read: false };
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  renderBookList();
  resetInputFields();

  // Refresh the page (Important to update the input box animation)
  location.reload();
}

// Function to reset the input fields
function resetInputFields() {
  bookTitleInput.value = "";
  authorTitleInput.value = "";
  bookTitleInput.style.width = "15%";
  authorTitleInput.style.width = "15%";
}

function renderBookList() {
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const bookItem = document.createElement("li");
    bookItem.classList.add("book-item");
    const readClass = book.read ? "read" : "";
    bookItem.innerHTML = `
                <span class="${readClass}">${index + 1}. ${
      book.title
    } <span class="author-space">By - ${book.author}</span></span>
                <div class="actions">
                    ${
                      book.read
                        ? `<button class="mark-as-unread-btn" onclick="toggleRead(${index})">Mark as Unread</button>`
                        : `<button class="mark-as-read-btn" onclick="toggleRead(${index})">Mark as Read</button>`
                    }
                    <button onclick="deleteBook(${index})">Delete</button>
                </div>
            `;
    bookList.appendChild(bookItem);
  });
}
function toggleRead(index) {
  books[index].read = !books[index].read;
  localStorage.setItem("books", JSON.stringify(books));
  renderBookList();
}

// Function to delete a book
function deleteBook(index) {
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  renderBookList();
}

renderBookList();

// Function to go back to the previous page
function goBack() {
  window.history.back();
}

// Select all "Mark as Read" buttons
const markAsReadButtons = document.querySelectorAll(".mark-as-read-btn");

markAsReadButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const bookItem = this.closest(".book-item");
    const bookText = bookItem.querySelector(".book-text");

    // Toggle the "read" class on the book text
    bookText.classList.toggle("read");

    // Optional: Change button text to "Mark as Unread" when marked as read
    if (bookText.classList.contains("read")) {
      this.textContent = "Mark as Unread";
    } else {
      this.textContent = "Mark as Read";
    }
  });
});

// Coordinates for the cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// Colors for the circles
const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

// Assign colors and initial position to each circle
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

// Update the coordinates when the mouse moves
window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

// Animation function to move the circles
function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    // Update the position and scale of each circle
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    // Get the next circle in the sequence
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.15;
    y += (nextCircle.y - y) * 0.15;
  });

  // Repeat the animation
  requestAnimationFrame(animateCircles);
}

// Start the animation
animateCircles();
