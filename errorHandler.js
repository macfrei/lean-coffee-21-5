function errorHandler(error, request, response, next) {
  console.error(error)
  const statusCode = error.status || 500
  response.status(statusCode).json(error)
}

module.exports = errorHandler
