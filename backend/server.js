const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((err) => console.log("MongoDB connection error:", err));

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const exerciseRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users.js');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
