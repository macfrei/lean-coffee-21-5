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

router.post('/', (request, response) => {
  console.log(request.body)

  const requestObject = request.body
  response.send(requestObject.text)

  //   const {text} = request.body
  //   response.send(text)
})

router.put('/:id', (request, response) => {
  const params = request.params
  console.log(params)
  response.send('This was a PUT request')
})

router.patch('/:id', (request, response) => {
  response.send('This was a PATCH request')
})

router.delete('/:id', (request, response) => {
  response.send('This was a DELETE request')
})

module.exports = router
