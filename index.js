const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.use('/api/cards', require('./routes/cards'))

// app.get('/api/cards/:id', (request, response) => {
//   response.set('Content-type', 'text/html; charset=utf-8')
//   response.send('<h1>Hello, World! Was läuft?</h1>')
// })

app.post('/api/cards', (request, response) => {
  console.log(request.body)

  const requestObject = request.body
  response.send(requestObject.text)

  //   const {text} = request.body
  //   response.send(text)
})

app.put('/api/cards/:id', (request, response) => {
  const params = request.params
  console.log(params)
  response.send('This was a PUT request')
})

app.patch('/api/cards/:id', (request, response) => {
  response.send('This was a PATCH request')
})

app.delete('/api/cards/:id', (request, response) => {
  response.send('This was a DELETE request')
})

// add error handling

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
