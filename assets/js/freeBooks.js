//adding books with unique ID's..
const books = [
    {
        id: 1,
        imageSrc: 'https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg',
        title: 'Alice\'s Adventures in Wonderland',
        readLink: 'https://www.gutenberg.org/ebooks/11'
    },
    {
        id: 2,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg',
        title: 'Pride and Prejudice',
        readLink: 'https://www.gutenberg.org/ebooks/1342'
    },
    {
        id: 3,
        imageSrc: 'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg',
        title: 'Frankenstein',
        readLink: 'https://www.gutenberg.org/ebooks/84'
    },
    {
        id: 4,
        imageSrc: 'https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg',
        title: 'Metamorphosis',
        readLink: 'https://www.gutenberg.org/ebooks/5200'
    },
    {
        id: 5,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg',
        title: 'The Adventures of Sherlock Holmes',
        readLink: 'https://www.gutenberg.org/ebooks/1661'
    },
    {
        id: 6,
        imageSrc: 'https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg',
        title: 'Alice\'s Adventures in Wonderland',
        readLink: 'https://www.gutenberg.org/ebooks/11'
    },
    {
        id: 7,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg',
        title: 'Pride and Prejudice',
        readLink: 'https://www.gutenberg.org/ebooks/1342'
    },
    {
        id: 8,
        imageSrc: 'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg',
        title: 'Frankenstein',
        readLink: 'https://www.gutenberg.org/ebooks/84'
    },
    {
        id: 9,
        imageSrc: 'https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg',
        title: 'Metamorphosis',
        readLink: 'https://www.gutenberg.org/ebooks/5200'
    },
    {
        id: 10,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg',
        title: 'The Adventures of Sherlock Holmes',
        readLink: 'https://www.gutenberg.org/ebooks/1661'
    },
    {
        id: 11,
        imageSrc: 'https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg',
        title: 'Alice\'s Adventures in Wonderland',
        readLink: 'https://www.gutenberg.org/ebooks/11'
    },
    {
        id: 12,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg',
        title: 'Pride and Prejudice',
        readLink: 'https://www.gutenberg.org/ebooks/1342'
    },
    {
        id: 13,
        imageSrc: 'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg',
        title: 'Frankenstein',
        readLink: 'https://www.gutenberg.org/ebooks/84'
    },
    {
        id: 14,
        imageSrc: 'https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg',
        title: 'Metamorphosis',
        readLink: 'https://www.gutenberg.org/ebooks/5200'
    },
    {
        id: 15,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg',
        title: 'The Adventures of Sherlock Holmes',
        readLink: 'https://www.gutenberg.org/ebooks/1661'
    },
    {
        id: 16,
        imageSrc: 'https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg',
        title: 'Alice\'s Adventures in Wonderland',
        readLink: 'https://www.gutenberg.org/ebooks/11'
    },
    {
        id: 17,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg',
        title: 'Pride and Prejudice',
        readLink: 'https://www.gutenberg.org/ebooks/1342'
    },
    {
        id: 18,
        imageSrc: 'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg',
        title: 'Frankenstein',
        readLink: 'https://www.gutenberg.org/ebooks/84'
    },
    {
        id: 19,
        imageSrc: 'https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg',
        title: 'Metamorphosis',
        readLink: 'https://www.gutenberg.org/ebooks/5200'
    },
    {
        id: 20,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg',
        title: 'The Adventures of Sherlock Holmes',
        readLink: 'https://www.gutenberg.org/ebooks/1661'
    },
    {
        id: 21,
        imageSrc: 'https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg',
        title: 'Alice\'s Adventures in Wonderland',
        readLink: 'https://www.gutenberg.org/ebooks/11'
    },
    {
        id: 22,
        imageSrc: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg',
        title: 'Pride and Prejudice',
        readLink: 'https://www.gutenberg.org/ebooks/1342'
    },
    {
        id: 23,
        imageSrc: 'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg',
        title: 'Frankenstein',
        readLink: 'https://www.gutenberg.org/ebooks/84'
    },
    {
        id: 24,
        imageSrc: 'https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg',
        title: 'Metamorphosis',
        readLink: 'https://www.gutenberg.org/ebooks/5200'
    }

    // Add more books as needed
];

function addToReadLater(bookId) {
    const readLaterBooks = JSON.parse(localStorage.getItem('readLaterBooks')) || [];

    if (readLaterBooks.some(book => book.id === bookId)) {
        alert('This book is already in your Read Later list.');
        return;
    }

    const book = books.find(book => book.id === bookId);
    readLaterBooks.push(book);
    localStorage.setItem('readLaterBooks', JSON.stringify(readLaterBooks));
    alert(`${book.title} has been added to your Read Later list.`);
}
