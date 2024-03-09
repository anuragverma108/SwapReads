const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/login', { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', { username: String, password: String });

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const userExists = await User.findOne({ username });

    if (userExists) {
        res.json({ success: false, message: 'Username already exists.' });
    } else {
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ success: true });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid username or password.' });
    }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
