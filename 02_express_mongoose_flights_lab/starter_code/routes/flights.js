const express = require("express");
const router = express.Router();
// You'll be creating this controller module next
const flightsCtrl = require("../controllers/flights");

// GET /movies
router.get("/", flightsCtrl.index);
// GET /movies/new
router.get("/new", flightsCtrl.new);
// GET /movies/:id
router.get("/:id", flightsCtrl.details); // Regular expression
// POST /movies
router.post("/", flightsCtrl.create);
router.post("/:id", flightsCtrl.addDetails); // Regular expression

module.exports = router;
