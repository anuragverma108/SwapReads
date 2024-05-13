const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const RegisterSchema = require("./assets/validation/zodschema");
const validate = require("./assets/validation/validate.schema");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://new_user_346:JoRrqWMHx2AoOA3e@cluster0.x3ka0pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = mongoose.model("User", { username: String, password: String });

app.post("/signup",validate(RegisterSchema), async (req, res) => {
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

app.post("/login", validate(RegisterSchema),async (req, res) => {
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
  console.log(bookID);
  Book.findById(bookID)
    .then((book) => {
      if (!book) {
        return res.json({ success: false, message: "Book Not Found." });
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
    user: "mail@gmail.com",
    pass: "password",
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
    from: "mail@gmail.com",
    to: sellerEmail,
    subject: "Someone is interested in your book!",
    text: `Congratulations! Your book "${bookTitle}" by ${bookAuthor} at ${bookPrice} has a Buyer ${buyerEmail}.`,
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

// Search route
app.get('/search', async (req, res) => {
  const { query } = req.query;
  if (!query) {
      return res.status(400).json({ error: 'enter a book to find' });
  }
  try {
      const results = await Book.find({ title: { $regex: query, $options: 'i' } });
      res.json(results);
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while searching for books' });
  }
});

// Filter route
app.get('/filter', async (req, res) => {
  const { author, minPrice, maxPrice } = req.query;

  const filter = {};
  if (author) {
      filter.author = author;
  }
  if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) {
          filter.price.$gte = parseInt(minPrice);
      }
      if (maxPrice) {
          filter.price.$lte = parseInt(maxPrice);
      }
  }

  try {
      const results = await Book.find(filter);
      res.json(results);
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while filtering books' });
  }
});


function sendListingEmailToSeller(sellerEmail, bookTitle) {
  // Configure Nodemailer transporter

  // Email options
  const mailOptions = {
    from: "mail@gmail.com",
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
