const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/mydb",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error.message));

const app = express();

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.use(userRouter);
app.use(bookRouter);

app.get("/", (req, res) => {
  res.send("Библиотека книг");
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу: ${API_URL}:${PORT}`);
});
