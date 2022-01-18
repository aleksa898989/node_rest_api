const express = require("express");
const { getAllItems, createItem } = require("../controllers/items");

const router = express.Router();

router.route("/").get(getAllItems).post(createItem);

module.exports = router;
