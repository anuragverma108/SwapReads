import mongoose from 'mongoose';

// Book Exchange/Selling
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },   // Consider adding validations
    author: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }, // Ensure price is a positive number
    sellerEmail: { type: String, required: true, match: /.+\@.+\..+/ }, // Basic email validation
});

const Book = mongoose.model("Book", bookSchema); // Capitalized model name
export default Book; // Use capitalized name in export
