const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  discription: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  }
});
module.exports = Item = mongoose.model("item", ItemSchema);
