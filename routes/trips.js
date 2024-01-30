var express = require('express');
var router = express.Router();


require('../models/connection');
const Trip = require('../models/trips');

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

module.exports = router;
