const express = require("express");
const mongoose = require("mongoose");
const ContactModel = require("./Model/Contact");
const cors = require("cors");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pratikhg2001:d5BbfS7OBFTjE4pG@cluster0.bd2m9t8.mongodb.net/portfolio"
    );
    console.log(`Connected to mongodb Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Database error ${error}`);
    s;
  }
};

connectDB()
  .then(() => {})
  .catch(() => {});

const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      "https://my-portfollio-5iqx.vercel.app",
      "https://my-portfollio-5iqx.vercel.app/",
    ],
  })
);

app.get("/hello", async (req, res) => {
  try {
    res.status(200).send({
      message: "welcome",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: error.message,
      error,
    });
  }
});

app.post("/contact", async (req, res) => {
  try {
    const response = new ContactModel(req.body);
    await response.save();
    return res.status(201).send({
      success: true,
      message: "ok",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: error.message,
      error,
    });
  }
});

// listen
app.listen(8000, () => {
  console.log(`Node server is running In Mode on ${8000} port`);
});
