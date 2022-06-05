const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Appointment = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phoneNum: {
        type: String
    },
    date: {
        type: String
    }
});
module.exports = mongoose.model('Appointment', Appointment);