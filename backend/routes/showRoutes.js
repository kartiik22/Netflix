const express = require("express");
const { getShows } = require("../controllers/showController");

const router = express.Router();

router.get("/", getShows);  // Public route to fetch shows

module.exports = router;
