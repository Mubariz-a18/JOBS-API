const express = require('express')

const userCtrl = require('../controllers/userCtrl')

const router = express.Router()



router.post('/signup',userCtrl.register)
router.put('/:email',userCtrl.update)

router.get('/users/page/:page/size/:size/',userCtrl.getUser)
router.get('/users',userCtrl.getUser)
router.get('/:email',userCtrl.getUserbyEmail)

module.exports = router