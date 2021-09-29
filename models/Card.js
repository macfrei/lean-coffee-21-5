const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
})

// Collection: 'cards'
// Mongoose Model: 'Card' --> MongoDB Collection: 'cards'
// Mongoose Model: 'User' --> MongoDB Collection: 'users'

module.exports = mongoose.model('Card', schema)
