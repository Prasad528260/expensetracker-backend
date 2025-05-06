const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const transactionRouter = require('./routes/transactions');
const DB_PATH = "mongodb+srv://root:root@expense.durxhi5.mongodb.net/tracker?retryWrites=true&w=majority&appName=expense";
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const {readdirSync} = require('fs');


// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// routes
readdirSync('./routes').map((route) => {
  app.use('/api/v1', require(`./routes/${route}`));
});










mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("connected to mongoose");

    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to mongoose ", err);
  });