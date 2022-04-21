const jwt = require('jsonwebtoken')

const tokenAuth = (req,res,next)=>{
    if(!req.headers.authorization){
        res.status(401).send('unauthorised')
        return
    }
    try{
        const headers = req.headers.authorization
    const token = headers.split(" ")
    const jwtToken = token[1]
    const result = jwt.verify(jwtToken,'mubariz123$')
    next()
    }catch(e){
        res.status('401').send('unauthorised')
    }
}

module.exports = tokenAuth