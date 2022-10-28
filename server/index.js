const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://localhost:27017/pt_shop_flower";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection Successfully!");
  })
  .catch((err) => {
      console.log("DB Connection fail! ");
      console.log("Message: "+ err);
  });

const server = app.listen(port, () => {
  console.log(`Server started with port ${port}`);
});
