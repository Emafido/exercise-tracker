const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.ATLAS_URI;

// ✅ Updated connection — no deprecated options
mongoose.connect(uri)
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch(err => console.log("MongoDB connection error:", err));

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
