const express = require('express')

const userCtrl = require('../controllers/userCtrl')
const tokenAuth = require('../middleWare/tokenAuth')

const router = express.Router()



router.post('/signup',userCtrl.register)
router.put('/:email',tokenAuth,userCtrl.update)
router.post('/signin',userCtrl.signin)
router.get('/users/page/:page/size/:size/',tokenAuth,userCtrl.getUser)
router.get('/users',tokenAuth,userCtrl.getUser)
router.get('/:email',tokenAuth,userCtrl.getUserbyEmail)

module.exports = router