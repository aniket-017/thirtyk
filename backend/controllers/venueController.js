const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Venue = require('../models/venueModel');

// Create Venue
exports.createVenue = catchAsyncErrors(async (req, res, next) => {
  const venue = await Venue.create(req.body);

  res.status(201).json({
    success: true,
    venue,
  });
});

// Get All Venues
exports.getAllVenues = catchAsyncErrors(async (req, res, next) => {
  const venues = await Venue.find();

  res.status(200).json({
    success: true,
    venues,
  });
});
