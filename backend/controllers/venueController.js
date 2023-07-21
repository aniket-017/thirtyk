const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Venue = require('../models/venueModel');
const ApiFeatures = require('../utils/apifeactures');

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

  const resultPerPage=100;
  const apiFeatures = new ApiFeatures(Venue.find(), req.query).search().pagination(resultPerPage);
  // const venues = await Venue.find();
   const venues = await apiFeatures.query;

  res.status(200).json({
    success: true,
    venues,
  });
});


exports.deleteVenue = catchAsyncErrors(async (req, res, next) => {
  const venue = await Venue.findById(req.params.id);

  if (!venue) {
    return res.status(404).json({
      success: false,
      message: "Venue not found",
    });
  }

  // Optionally, you can add some authorization logic here to check if the user is allowed to delete the venue.

  await venue.deleteOne();

  res.status(200).json({
    success: true,
    message: "Venue Deleted Successfully",
  });
});

