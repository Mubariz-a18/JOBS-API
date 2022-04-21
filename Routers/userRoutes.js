const express = require('express')

const userCtrl = require('../controllers/userCtrl')
const tokenAuth = require('../middleWare/tokenAuth')

const router = express.Router()


//candidate  //public
router.post('/signup',userCtrl.register)
router.post('/signin',userCtrl.signin)
router.put('/:email',tokenAuth,userCtrl.update)

//recruiter
router.get('/users/page/:page/size/:size/',tokenAuth,userCtrl.getUser)
router.get('/users',tokenAuth,userCtrl.getUser)
router.get('/:email',tokenAuth,userCtrl.getUserbyEmail)

//admin
router.post('/recruiter/signup',userCtrl.addRecruiter)


module.exports = router