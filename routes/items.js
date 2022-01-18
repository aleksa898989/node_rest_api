const express = require("express");
const { getAllItems, createItem, getSingleItem, deleteItem, updateItem } = require("../controllers/items");

const router = express.Router();

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getSingleItem).delete(deleteItem).patch(updateItem);

module.exports = router;
