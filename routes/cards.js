const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
  response.set('Content-type', 'text/html; charset=utf-8')
  response.send('<h1>Hello, Moon! Was läuft?</h1>')
})

router.get('/:id', (request, response) => {
  response.set('Content-type', 'text/html; charset=utf-8')
  response.send('I am a lonley object!')
})

// Add all other router handlers for '/api/cards'

module.exports = router
