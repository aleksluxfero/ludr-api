require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router)

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

startServer();


