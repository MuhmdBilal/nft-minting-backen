const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require("./db/db")
require('dotenv').config()
const userRoute = require("./routes/userRouter")
const app = express();
const PORT = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", userRoute)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });