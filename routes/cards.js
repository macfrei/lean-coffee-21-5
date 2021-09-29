const express = require('express')
const Card = require('../models/Card')
const { nanoid } = require('nanoid')

const router = express.Router()

let cards = [
  {
    text: 'What is MongoDB?',
    author: 'John Doe',
    id: '1234abc',
  },
  {
    text: 'What is Node.js?',
    author: 'Jane Doe',
    id: '123abcd',
  },
]

router.get('/', (request, response) => {
  Card.find()
    .then(data => response.status(200).json(data))
    .catch(error => response.status(404).json(error))
})

router.get('/:id', (request, response) => {
  const { id } = request.params
  // when data === null throw new error
  Card.findById(id)
    .then(data => response.status(200).json(data))
    .catch(error => response.status(404).json(error))
})

router.post('/', (request, response) => {
  const { text, author } = request.body

  // Look in mongoose documentation for: 'create'
  if (text === '' || author === '') {
    const error = { message: 'Information missing.' }
    return response.status(400).json(error)
  }

  const newCard = { text, author }

  // Card.create(request.body)
  // Card.create({ text, author }) { text: text, author: author }
  Card.create(newCard)
    .then(card => response.status(201).json(card))
    .catch(error => response.status(404).json(error))
})

router.patch('/:id', (request, response) => {
  const { id } = request.params
  const { text, author } = request.body

  if (!text && !author) {
    const error = { message: 'Information missing.' }
    return response.status(400).json(error)
  }

  Card.findByIdAndUpdate(id, { text, author }, { new: true })
    .then(card => response.status(200).json(card))
    .catch(error => response.status(400).json(error))
})

router.delete('/:id', (request, response) => {
  const { id } = request.params

  Card.findByIdAndDelete(id)
    .then(card => response.status(200).json(card))
    .catch(error => response.status(404).json(error))
})

module.exports = router
