import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
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
      serverSelectionTimeoutMS: 30000,
    });
    console.log("DB connected");
  } catch (err) {
    console.log("DB failed", err);
  }
};

const User = mongoose.model("User", { username: String, password: String });
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  sellerEmail: String,
});
const Book = mongoose.model("Book", bookSchema);

const sendListingEmailToSeller = (email, bookTitle) => {
  // Implement the email sending logic here
};

const sendBuyingEmailToSeller = (sellerEmail, bookTitle, bookPrice, bookAuthor, buyerEmail) => {
  // Implement the email sending logic here
};

dbConnect().then(() => {
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

  // Contact form endpoint
  app.post("/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "enter_you_mail",
        pass: "Enter_YOUR_APP_PASSWORD",
      },
    });
    const mailOptions = {
      from: email,
      to: "enter_you_mail",
      subject: `You Have New Query from ${name} Regarding ${subject}`,
      html: `Hey there is query from is  ${name} Email: ${email}  &nbsp; Message:<p style="color: red;"> ${message}</p>`,
    };
    const acknowledgmentOptions = {
      from: "enter_you_mail",
      to: email,
      subject: "Acknowledgment of your message",
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
      <p style="margin-top: 20px;">Best regards,<br><strong>SwapReads.com</strong></p>
    </div>`,
    };
    try {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(acknowledgmentOptions);
      res.json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      console.error("Error sending email:", err);
      res.json({ success: false, message: "Error sending message" });
    }
  });

  app.post('/subscribe', (req, res) => {
    let email = req.body.email;
    console.log(email);
    res.json({ success: true, message: "Subscribed successfully" });
  });

  // Subscribe endpoint
  app.post('/subscribe', (req, res) => {
    let email = req.body.email;
    console.log(email);
    res.json({ success: true, message: "Subscribed successfully" });
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


app.post('/subscribe',(req,res)=>{
  let email = req.body;
  console.log(email);
})

app.listen(3000, () => console.log("Server is running on port 3000"));
