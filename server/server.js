require('dotenv').config();  // Enable access to .env variables

// Set up Express, middleware 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require("http");
const app = express();

const db = require('./../db/config');  
const memberRoute = require('./routes/members');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));   // Serve up static files 
app.use('/members', memberRoute);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

