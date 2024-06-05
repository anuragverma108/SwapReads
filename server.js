const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const RegisterSchema = require("./assets/validation/zodschema");
const validate = require("./assets/validation/validate.schema");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());

const MONGO_URI = "mongodb://localhost:27017/swapread";

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    });
    console.log("DB connected");
  } catch (err) {
    console.log("DB failed", err);
  }
};

dbConnect().then(() => {
  const User = mongoose.model("User", { username: String, password: String });

  app.post("/signup", validate(RegisterSchema), async (req, res) => {
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

  app.post("/login", validate(RegisterSchema), async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: "Invalid username or password." });
    }
  });

  // Book Exchange/Selling
  const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    sellerEmail: String,
  });

  const Book = mongoose.model("Book", bookSchema);

  app.post("/sellBook", async (req, res) => {
    const { title, author, price, sellerEmail } = req.body;
    const newBook = new Book({ title, author, price, sellerEmail });

    newBook.save()
      .then((book) => {
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
    Book.findById(bookID)
      .then((book) => {
        if (!book) {
          return res.json({ success: false, message: "Book Not Found." });
        }
        sendBuyingEmailToSeller(book.sellerEmail, book.title, book.price, book.author, buyerEmail);
        res.json({ success: true, message: "Email Sent to Seller" });
      })
      .catch((err) => {
        console.log(err);
        res.json({ success: false, message: "Internal Server Error" });
      });
  });
});
