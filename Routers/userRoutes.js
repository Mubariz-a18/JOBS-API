const express = require('express')
const multer = require('multer')
const fs = require("fs")
const path = require("path")


const userCtrl = require('../controllers/userCtrl')
const tokenAuth = require('../middleWare/tokenAuth')
const AuthMiddleWare = require('../middleWare/authorize')
const router = express.Router()


const dir = './uploads'
if(!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}

const storage = multer.diskStorage({
    destination:'./uploads',
    filename:function (req,file,cb){
        const uniqueName = Date.now() +'-' +Math.round(Math.random()  * 1E9);
        const fileName = uniqueName + file.originalname;
        req.resume = fileName
        cb(null,fileName)
    }
})



const upload = multer({storage})


//candidate  //public
router.post('/signup',userCtrl.register)
router.post('/signin',userCtrl.signin)
router.put('/:email',upload.single('resume'),userCtrl.update)

//recruiter
router.get('/users/page/:page/size/:size/',tokenAuth,AuthMiddleWare.authorizeRecruiter,userCtrl.getUser)
router.get('/users',tokenAuth,AuthMiddleWare.authorizeRecruiter,userCtrl.getUser)
router.get('/:email',tokenAuth,AuthMiddleWare.authorizeRecruiter,userCtrl.getUserbyEmail)

//admin
router.post('/recruiter/signup',tokenAuth,AuthMiddleWare.authorizeAdmin,userCtrl.addRecruiter)


module.exports = router