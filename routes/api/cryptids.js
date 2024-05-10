const router = require('express').Router()

router.get('/', (req, res) => 
  res.json(['Bigfoot', 'Yeti', 'Wendigo', 'Chupacabra']))

module.exports = router