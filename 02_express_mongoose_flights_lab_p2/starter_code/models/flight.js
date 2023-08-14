const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const destinationSchema = new mongoose.Schema(
  {
    Airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    Arrival: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
const flightSchema = new mongoose.Schema(
  {
    FlightNo: {
      type: Number,
      min: 10,
      max: 9999,
    },
    Airline: {
      type: String,
      enum: ["American", "Southwest", "United", "GulfAir", "Ettihad"],
    },
    Airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    Departs: {
      type: Date,
    },
    destination: { type: [destinationSchema] },
  },
  {
    timestamps: true,
  }
);
// Compile the schema into a model and export it
module.exports = mongoose.model("Flight", flightSchema);
