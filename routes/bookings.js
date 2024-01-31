var express = require('express');
var router = express.Router();

require('../models/connection');
const Booking = require('../models/bookings');
const Trip = require('../models/trips');


// VISUALIZE ALLS ADDED TRIPS

router.get('/', (req, res) => {

  Booking
    .find({
      isAdded: true
    })
    .then((trips) => {
      console.log(trips)
      if (trips.length !== 0) {
        res.json({ result: true, trips })
      } else {
        res.json({ result: false })
      }
    })
    .catch((error) => console.error(error))
})

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


// UPDATE BOOKING isPurchase = TRUE 


router.put('/updatePurchase/:id', (req, res) => {

  Booking.findByIdAndUpdate(req.params.id, { isPurcharse: true })
    .then((updatedUser) => {
      if (updatedUser) {
        res.json({ result: true, updatedUser })
      } else {
        res.json({ result: false, message: "Update not accepted" });
      }

    })
    .catch((error) => console.error(error))
})

// UPDATE BOOKING isAdded = false 

router.put('/updateCart/:id', (req, res) => {

  Booking.findByIdAndUpdate(req.params.id, { isAdded: false })
    .then((updatedUser) => {
      if (updatedUser) {
        res.json({ result: true, updatedUser })
      } else {
        res.json({ result: false, message: "Update not accepted" });
      }

    })
    .catch((error) => console.error(error))
})


module.exports = router;