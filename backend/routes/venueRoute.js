const express = require('express');
const { getAllVenues, createVenue } = require('../controllers/venueController');

const router = express.Router();

router.route('/venues').get(getAllVenues);
router.route('/venue/new').post(createVenue);

module.exports = router;
