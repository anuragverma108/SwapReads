import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { RegisterSchema } from './assets/validation/zodschema.js';
import validate from './assets/validation/validate.schema.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cors());

const MONGO_URI = "mongodb+srv://nishantkaushal0708:jhn14300@cluster0.vye07az.mongodb.net/";

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    });
    console.log("DB connected");
  } catch (err) {
    console.log("DB failed", err);
  }
};

dbConnect().then(() => {
  const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    browsingHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  });

  const User = mongoose.model("User", userSchema);

  const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    sellerEmail: String,
    reviews: [
      {
        username: String,
        rating: Number,
        comment: String,
      },
    ],
  });

  const Book = mongoose.model("Book", bookSchema);

  app.post("/signup", validate(RegisterSchema), async (req, res) => {
    const { username, password, email } = req.body;
    const userExists = await User.findOne({ username });

    if (userExists) {
      res.json({ success: false, message: "Username already exists." });
    } else {
      const newUser = new User({ username, password, email });
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

  // User profile management
  app.post("/profile", async (req, res) => {
    const { username, email } = req.body;
    const updatedUser = await User.findOneAndUpdate({ username }, { email }, { new: true });
    if (updatedUser) {
      res.json({ success: true, message: "Profile updated successfully", user: updatedUser });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  });

  // Book review and rating
  app.post("/review", async (req, res) => {
    const { bookID, username, rating, comment } = req.body;
    const book = await Book.findById(bookID);

    if (!book) {
      return res.json({ success: false, message: "Book not found" });
    }

    book.reviews.push({ username, rating, comment });
    await book.save();

    res.json({ success: true, message: "Review added successfully", book });
  });

  // Browsing history
  app.post("/browse", async (req, res) => {
    const { userID, bookID } = req.body;
    const user = await User.findById(userID);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    user.browsingHistory.push(bookID);
    await user.save();

    res.json({ success: true, message: "Browsing history updated", user });
  });

  // Book recommendations
  app.get("/recommendations/:userID", async (req, res) => {
    const { userID } = req.params;
    const user = await User.findById(userID).populate('browsingHistory');

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Recommend books based on the user's browsing history (simple example)
    const recommendations = await Book.find({
      _id: { $nin: user.browsingHistory },
    }).limit(5);

    res.json({ success: true, recommendations });
  });

  // Favorite books
  app.post("/favorites/add", async (req, res) => {
    const { userID, bookID } = req.body;
    const user = await User.findById(userID);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    user.favorites.push(bookID);
    await user.save();

    res.json({ success: true, message: "Book added to favorites", user });
  });

  app.get("/favorites/:userID", async (req, res) => {
    const { userID } = req.params;
    const user = await User.findById(userID).populate('favorites');

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({ success: true, favorites: user.favorites });
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

app.listen(4000, () => console.log("Server is running on port 3000"));
