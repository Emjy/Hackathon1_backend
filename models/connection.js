
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://karlchareyre:qPPvP82H2TigDtrw@cluster0.8329ywp.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
.then(() => console.log('Database connected'))
.catch(error => console.error(error));