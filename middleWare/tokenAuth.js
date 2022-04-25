const jwt = require('jsonwebtoken')
require('dotenv').config()



const tokenAuth = (req,res,next)=>{
    if(!req.headers.authorization){
        res.status(401).send('unauthorised')
        return
    }
    try{
    const headers = req.headers.authorization
    const token = headers.split(" ")
    const jwtToken = token[1]
    const result = jwt.verify(jwtToken,process.env.secretKey)
    req.role = result.role
    next()
    }catch(e){
        res.status('401').send('unauthorised')
    }
}

module.exports = tokenAuth