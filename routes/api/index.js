const router = require('express').Router()
const animalRoutes = require('./animals')
const cryptidRoutes = require('./cryptids')

router.use('/animals', animalRoutes)
router.use('/cryptids', cryptidRoutes)

module.exports = router