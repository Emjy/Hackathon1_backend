var express = require('express');
var router = express.Router();


require('../models/connection');
const Trip = require('../models/trips');

router.get('/:departure/:arrival/:date', (req, res) => {
    Trip
    .find({departure: req.params.departure.toLowerCase(), arrival: req.params.arrival.toLowerCase(), date: new Date(req.params.date)})
    .then((data) => res.json({ result: true, trip: data }))
})

module.exports = router;
