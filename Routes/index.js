const express = require('express')
const htmlRoutes = require('./htmlRoutes.js')
const router = express.Router()
const apiRoutes = require('./api/index.js')

router.use('/api', apiRoutes)
router.use('/', htmlRoutes)

module.exports = router



