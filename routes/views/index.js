const path = require('path')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, '..', '..', 'public', 'index.html') )
})

router.get('/add-animal', (req, res) => {
  res.sendFile( path.join(__dirname, '..', '..', 'public', 'add-animal.html') )
})

module.exports = router