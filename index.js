const express = require('express')
const connectDatabase = require('./setupMongo')
const app = express()

const port = 3000

connectDatabase('mongodb://localhost:27017/lean-coffee-board-21-5')

app.use(express.json())

app.use('/api/cards', require('./routes/cards'))

// add error handling

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
