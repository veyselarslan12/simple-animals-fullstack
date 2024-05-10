const protectedRoutes = [
  '/private-route',
  '/protected-route',
  '/secret-route'
]

function blockPrivateRoutes(req, res, next) {
  if (protectedRoutes.includes(req.url)) {
    console.log(`Accessing ${req.url} is not allowed`)
    res.redirect('/')
  }

  next()
}

module.exports = blockPrivateRoutes