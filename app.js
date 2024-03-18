// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs')

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/crud_app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
