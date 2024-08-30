const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require("./db/db")
require('dotenv').config()
const userRoute = require("./routes/userRouter")
const nftMintingRoute = require("./routes/nftMintingRoute")
const app = express();
const PORT = process.env.PORT || 8001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", userRoute);
app.use("/api", nftMintingRoute)
app.use("/", (req, res)=>{
  res.send("Hello from server")
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });