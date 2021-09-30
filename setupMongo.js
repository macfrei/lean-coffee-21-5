const mongoose = require('mongoose')
// import mongoose from 'mongoose' ES6 Module

function connectDatabase(url) {
  mongoose
    .connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('can not connect: ' + error))
}

module.exports = connectDatabase
