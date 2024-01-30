const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    emailUser: String,
    isAdded: Boolean,
    isPurcharse: Boolean,
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;