const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const items = require("./routes/api/items");

// DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// use routes
app.use("/api/items", items);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`server running on ${port}`));
