function requestLogger(req, res, next) {
  console.log(`METHOD: ${req.method}`)
  console.log(`PATH: ${req.url}`)
  if (req.body) console.log(`BODY:`, req.body)
  next()
}

module.exports = requestLogger