const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    requited: true
  },
  autor: {
    type: String,
    requited: true
  },
  discription: {
    type: String,
    requited: true
  },
  poster: {
    type: String,
    requited: true
  }
});
module.exports = Item = mongoose.model("item", ItemSchema);
