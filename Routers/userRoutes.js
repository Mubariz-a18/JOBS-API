const express = require('express')

const userCtrl = require('../controllers/userCtrl')

const router = express.Router()



router.post('/signup',userCtrl.register)
router.put('/:email',userCtrl.update)

module.exports = router