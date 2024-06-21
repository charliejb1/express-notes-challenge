const express = require('express')
const router = express.Router()
const noteRoutes = require('./noteroutes.js')

router.use('/notes', noteRoutes)

module.exports = router