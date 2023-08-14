const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
  details: detailsShow,
  addDetails: addDetailsShow,
};
async function addDetailsShow(req, res) {
  const detail = await flight.findById(req.params.id);

  // for (let key in req.body) {
  //   if (req.body[key] === "") delete req.body[key];
  // }
  await detail.destination.push(req.body);
  try {
    detail.save();
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect(`/flights/${req.params.id}`); // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render(`/flights/${req.params.id}`, { errorMsg: err.message });
  }
}
async function detailsShow(req, res) {
  const flights = await Flight.find({});
  res.render(`/flights/${req.params.id}`, { flights });
  // res.render("flights/details", { errorMsg: "" });
}
async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}

function newFlight(req, res) {
  // We'll want to be able to render an
  // errorMsg if the create action fails
  res.render("flights/new", { errorMsg: "" });
}

async function create(req, res) {
  // // remove any whitespace at start and end of cast
  // req.body.Departs = req.body.Departs;
  // // split cast into an array if it's not an empty string - using a regular expression as a separator
  // if (req.body.Departs) req.body.Departs = req.body.Departs;
  // // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect("/flights"); // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}
