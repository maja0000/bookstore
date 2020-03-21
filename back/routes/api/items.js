const express = require("express");
const router = express.Router();

// my model Item
const Item = require("../../../models/Itemtem");

//// create routes

// @route   POST api/items
// @desc    Create an item
// @access  Public - not important now

router.post("/", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    autor: req.body.autor,
    discription: req.body.discription,
    poster: req.body.poster
  });
  newItem.save().then(item => res.json(item));
});
////////////GET////////////////////////////////////

// @route   GET api/items/all
// @desc    GET item sort decreasing
// @access  Public - not important now

router.get("/all", (req, res) => {
  Item.find()
    .sort({ name: 1 })
    .then(items => res.json(items));
});

/////////////////////////////////////////////////////////////////////////
// @route   DELETE api/items/id
// @desc    DELETE an item
// @access  Public - not important now

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
