var express = require('express');
var router = express.Router();

require('../models/connection');
const Booking = require('../models/bookings');
const Trip = require('../models/trips');

// ADD TRIP TO BOOKING COLLECTION
router.post('/:id' , (req, res) => {

    const { departure, arrival, date, price } = req.body // Désctructuration
    
    const tripAdded = new Trip ({ departure, arrival, date, price })

    if (req.body.tripAdded) {
        bookings.push(req.body.tripAdded);
        res.json({ result: true, panier: trips });
      } else {
        res.json({ result: false });
      }

});

module.exports = router;