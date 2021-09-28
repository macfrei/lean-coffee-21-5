const express = require('express')

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
  response.status(200).json(cards)
})

router.get('/:id', (request, response) => {
  const { id } = request.params
  // const params = request.params // { id: '1234abc' }
  // const id = params.id // '1234abc'

  const card = cards.find(card => card.id === id)
  // card === undefined: falsy
  // card === {...}: truthy
  if (card) {
    response.status(200).json(card)
  } else {
    const error = { message: 'Could not find object with that id.' }
    response.status(404).json(error)
  }
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
