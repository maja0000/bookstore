const express = require("express");
const mongoose = require("mongoose");
const items = require("../routes/api/itemss");
const app = express();
app.use(express.json());

// DB config
const db = require("../config/keyss").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// use routes
app.use("/api/items", items);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`server running on ${port}`));
