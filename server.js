const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = mongoose.model("User", { username: String, password: String });

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username });

  if (userExists) {
    res.json({ success: false, message: "Username already exists." });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ success: true });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Invalid username or password." });
  }
});

//Book Exchange/Selling
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  sellerEmail: String,
});
const Book = mongoose.model("Book", bookSchema);

//Book Listinh
app.post("/sellBook", async (req, res) => {
  const { title, author, price, sellerEmail } = req.body;
  const newBook = new Book({
    title,
    author,
    price,
    sellerEmail,
  });

  newBook
    .save()
    .then((book) => {
      // Send email to the seller
      sendListingEmailToSeller(sellerEmail, book.title);
      res.json({ success: true, message: "Book listing added successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false, message: "Internal Server Error" });
    });
});
app.post("/buyBook", async (req, res) => {
  const { bookID, buyerEmail } = req.body;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        returnres.json({ success: false, message: "Book Not Found." });
      }
      sendBuyingEmailToSeller(
        book.sellerEmail,
        book.title,
        book.price,
        book.author,
        buyerEmail
      );
      res.json({ success: true, message: "Email Sent to Seller" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false, message: "Internal Server Error" });
    });
});

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fazilking900@gmail.com",
    pass: "hvndavanagere",
  },
});
function sendBuyingEmailToSeller(
  sellerEmail,
  bookTitle,
  bookPrice,
  bookAuthor,
  buyerEmail
) {
  // Email options
  const mailOptions = {
    from: "fazilking900@gmail.com",
    to: sellerEmail,
    subject: "Someone is interested in your book!",
    text: `Congratulations! Your book "${bookTitle}" by ${bookAuthor} at ${bookPrice} has a Buyer ${buyeremail}.`,
  };

  // Send email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
function sendListingEmailToSeller(sellerEmail, bookTitle) {
  // Configure Nodemailer transporter

  // Email options
  const mailOptions = {
    from: "fazilking900@gmail.com",
    to: sellerEmail,
    subject: "Your book listing is live!",
    text: `Congratulations! Your book "${bookTitle}" is now listed for sale.`,
  };

  // Send email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
app.listen(3000, () => console.log("Server is running on port 3000"));
