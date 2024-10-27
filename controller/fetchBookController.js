import express from 'express';
const router = express.Router(); // Use express.Router()

// Data for classic literature books
const classicLiteratureBooks = [
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "Great Expectations", author: "Charles Dickens" },
    { title: "The Odyssey", author: "Homer" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Iliad", author: "Homer" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Wuthering Heights", author: "Emily Brontë" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Jane Eyre", author: "Charlotte Brontë" },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky" },
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Madame Bovary", author: "Gustave Flaubert" },
    { title: "The Scarlet Letter", author: "Nathaniel Hawthorne" },
    { title: "Frankenstein", author: "Mary Shelley" },
    { title: "Les Misérables", author: "Victor Hugo" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "1984", author: "George Orwell" },
    { title: "The Divine Comedy", author: "Dante Alighieri" }
];

// Route to get only classic literature books
router.get('/books/classic-literature', (req, res) => {

    res.json({ success: true, books: classicLiteratureBooks });
});

export default router;