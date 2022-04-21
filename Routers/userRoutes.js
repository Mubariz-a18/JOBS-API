const express = require('express')

const userCtrl = require('../controllers/userCtrl')
const tokenAuth = require('../middleWare/tokenAuth')
const AuthMiddleWare = require('../middleWare/authorize')
const router = express.Router()




//candidate  //public
router.post('/signup',userCtrl.register)
router.post('/signin',userCtrl.signin)
router.put('/:email',tokenAuth,userCtrl.update)

//recruiter
router.get('/users/page/:page/size/:size/',tokenAuth,AuthMiddleWare.authorizeAdmin,userCtrl.getUser)
router.get('/users',tokenAuth,AuthMiddleWare.authorizeAdmin,userCtrl.getUser)
router.get('/:email',tokenAuth,AuthMiddleWare.authorizeAdmin,userCtrl.getUserbyEmail)

//admin
router.post('/recruiter/signup',tokenAuth,AuthMiddleWare.authorizeAdmin,userCtrl.addRecruiter)


module.exports = router