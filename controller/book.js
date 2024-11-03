import Book from '../models/book.js'; // Adjust the path if necessary

const sellBook = async (req, res) => {
  const { title, author, price, sellerEmail } = req.body;
  const newBook = new Book({ title, author, price, sellerEmail });

  try {
    const savedBook = await newBook.save();
    sendListingEmailToSeller(sellerEmail, savedBook.title);
    res.json({ success: true, message: "Book listing added successfully!" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

const buyBook = async (req, res) => {
  const { bookID, buyerEmail } = req.body;

  try {
    const book = await Book.findById(bookID);
    if (!book) {
      return res.json({ success: false, message: "Book Not Found." });
    }

    sendBuyingEmailToSeller(book.sellerEmail, book.title, book.price, book.author, buyerEmail);
    res.json({ success: true, message: "Email Sent to Seller" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

export { sellBook, buyBook }; // Use named exports
