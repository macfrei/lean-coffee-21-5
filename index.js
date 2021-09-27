const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('<h1>Hello, World! What is up?</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
