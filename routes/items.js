const express = require("express");
const { getAllItems, createItem, getSingleItem, deleteItem } = require("../controllers/items");

const router = express.Router();

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getSingleItem).delete(deleteItem);

module.exports = router;
