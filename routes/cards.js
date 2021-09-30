const express = require('express')
const Card = require('../models/Card')

const router = express.Router()

router.get('/', (request, response, next) => {
  Card.find()
    .then(data => response.status(200).json(data))
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params

  Card.findById(id)
    .then(data => {
      if (!data) {
        throw new Error('This is my error!')
      }
      response.status(200).json(data)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.post('/', (request, response, next) => {
  const { text, author } = request.body

  if (text === '' || author === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  const newCard = { text, author }

  Card.create(newCard)
    .then(card => response.status(201).json(card))
    .catch(next)
})

router.patch('/:id', (request, response, next) => {
  const { id } = request.params
  const { text, author } = request.body

  if (!text && !author) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  Card.findByIdAndUpdate(id, { text, author }, { new: true })
    .then(card => {
      if (!card) {
        throw new Error()
      }
      response.status(200).json(card)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.delete('/:id', (request, response, next) => {
  const { id } = request.params

  Card.findByIdAndDelete(id)
    .then(card => {
      if (!card) {
        throw new Error()
      }
      response.status(200).json(card)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

module.exports = router
