import express from 'express';
const router = express.Router();
import { sellBook, buyBook } from '../controller/book.js'; // Adjust path if necessary

// Endpoint to sell a book
router.post("/sellBook", sellBook);

// Endpoint to buy a book
router.post("/buyBook", buyBook);

export default router; // Use default export
