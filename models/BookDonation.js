const mongoose = require('mongoose');

const bookDonationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  bookTitle: { type: String, required: true },
  bookAuthor: { type: String, required: true },
  donationDate: { type: Date, default: Date.now },
});

const BookDonation = mongoose.model('BookDonation', bookDonationSchema);

module.exports = BookDonation;
