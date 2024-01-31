var express = require('express');
var router = express.Router();


require('../models/connection');
const Trip = require('../models/trips');
const Booking = require('../models/bookings');

router.get('/:departure/:arrival/:date', (req, res) => {

    let startDate = new Date(req.params.date);
    let endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 1)
 
    Trip
        .find({
            departure: req.params.departure,
            arrival: req.params.arrival,
            date: {
                $gte: startDate,
                $lt: endDate
            }
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

// Recupérer l'ID de la carte
router.post('/:id' , (req, res) => {
 
    Trip
        .findById(req.params.id)
        .then( (trip) => {
            if (trip !== null) {
                res.json({ result: true, trip });
              } else {
                res.json({ result: false, message: "Id doesn't exist" });
              }
        const newBooking = new Booking ({
            emailUser: 'karl&emilien@slay.com',
            isAdded: true,
            isPurcharse: false,
            trip,
        });
            newBooking.save().then(() => { console.log('Trip added to cart') });
        })
        .catch((error) => console.error(error))
})




    

module.exports = router;
