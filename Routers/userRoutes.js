const express = require('express')

const authenticate  = require('../middleWare/basicAuth')
const userCtrl = require('../controllers/userCtrl')

const router = express.Router()



router.post('/signup',userCtrl.register)
router.put('/:email',authenticate,userCtrl.update)
router.post('/signin',userCtrl.signin)
router.get('/users/page/:page/size/:size/',authenticate,userCtrl.getUser)
router.get('/users',authenticate,userCtrl.getUser)
router.get('/:email',authenticate,userCtrl.getUserbyEmail)

module.exports = router