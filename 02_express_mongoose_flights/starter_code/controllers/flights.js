const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
  details: detailsShow,
  addDetails: addDetailsShow,
  newTicket,
  addNewTicket,
  addDestination,
};
// add details
async function addDetailsShow(req, res) {
  const detail = await Flight.findById(req.params.id);
  // console.log(detail);
  detail.Destination.push(req.body);
  // await detail.Arrival.push(req.body);
  try {
    await detail.save();
    res.redirect("flights/:id"); // Update this line
  } catch (err) {
    console.log(err);
    res.render("flights/details", { errorMsg: err.message });
  }
}
// show one flight details
async function detailsShow(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render("flights/details", { flight });
}
// show index
async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}
// add new flight page
async function newFlight(req, res) {
  const flight = await Flight.find({});
  res.render("flights/new", { flight });
}
// add new ticket page
async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  console.log(flight);
  res.render("flights/newTicket", { flight });
}
// add new flight func
async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}
// add new ticket
async function addNewTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  flight.Ticket.push(req.body);
  await flight.save();
  res.redirect(`/flights/${req.params.id}`);
}
// add new destination
async function addDestination(req, res) {
  const flight = await Flight.findById(req.params.id);
  flight.Destination.push(req.body);
  await flight.save();
  res.redirect(`/flights/${req.params.id}`);
}
