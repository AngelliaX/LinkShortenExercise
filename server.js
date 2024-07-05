require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const { connectDB } = require('./models');

const app = express();
const PORT = process?.env?.PORT || 2401;

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/routeHandler'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({ "error": "Route not found"});
    } else {
        res.type('txt').send("Route not found");
    }
});


// Initialize Sequelize and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});