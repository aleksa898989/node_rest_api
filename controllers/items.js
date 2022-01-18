const Item = require("../models/Item");

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({ items });
  } catch (error) {
    res.json(error);
  }
};

const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({ item });
  } catch (error) {
    res.json(error);
  }
};

const getSingleItem = async (req, res) => {
  const currentItemId = req.params.id;
  try {
    const item = await Item.findById({ _id: currentItemId });
    if (!item) return res.status(404).json(`no item with id: ${currentItemId}`);
    res.status(200).json({ item });
  } catch (error) {
    res.json(error);
  }
};

const deleteItem = async (req, res) => {
  const currentItemId = req.params.id;

  try {
    const item = await Item.findByIdAndDelete({ _id: currentItemId });
    if (!item) return res.status(404).json(`no item with id: ${currentItemId}`);
    res.status(200).json({ item });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getAllItems, createItem, getSingleItem, deleteItem };
