const express = require('express')
const app = express()

const port = 3000

app.get('/api/cards', (request, response) => {
  response.set('Content-type', 'text/html; charset=utf-8')
  response.send('<h1>Hello, World! Was läuft?</h1>')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
