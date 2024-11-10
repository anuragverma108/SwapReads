const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      description: "A novel about racial injustice in the Deep South."
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      description: "A totalitarian regime uses surveillance to control its citizens."
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      description: "A story of love, wealth, and social change in the 1920s."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      description: "A young man struggles with the pressures of adulthood."
    }
  ];
  
  document.getElementById("recommend-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * books.length);
    const book = books[randomIndex];
  
    document.getElementById("book-title").textContent = book.title;
    document.getElementById("book-author").textContent = `Author: ${book.author}`;
    document.getElementById("book-genre").textContent = `Genre: ${book.genre}`;
    document.getElementById("book-description").textContent = book.description;
  
    document.getElementById("book-info").style.display = "block";
  });
  