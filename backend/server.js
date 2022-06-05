const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
const appointmentRoutes = express.Router();
let Appointment = require('./appointment.model');

mongoose.connect('mongodb://127.0.0.1:27017/appointments', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

appointmentRoutes.route('/add-appointment').post(function(req, res) {
    let appointment = new Appointment(req.body);
    appointment.save()
        .then(appointment => {
            res.status(200).json({'status': 'appointment details added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new appointment failed');
        });
});

app.use('/', appointmentRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});