const express = require("express");
const router = express.Router();
// You'll be creating this controller module next
const flightsCtrl = require("../controllers/flights");

// GET /flights
router.get("/", flightsCtrl.index);
// GET /flights/new
router.get("/new", flightsCtrl.new);
// GET /flights/:id
router.get("/:id", flightsCtrl.details); // Regular expression
router.get("/:id/newTicket", flightsCtrl.newTicket); // Regular expression

// POST /flights
router.post("/", flightsCtrl.create);
router.post("details/:id", flightsCtrl.addDetails); // Regular expression
router.post("/:id/addTicket", flightsCtrl.addNewTicket); // Regular expression
router.post("/:id/addDestination", flightsCtrl.addDestination); // Regular expression

module.exports = router;
