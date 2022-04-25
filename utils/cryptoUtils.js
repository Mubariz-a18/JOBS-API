const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const getHash = (password)=>{
    return bcrypt.hash(password,1)
}

const comparePwd = (password,hashedPwd)=>{
    return bcrypt.compare(password,hashedPwd)
}

const generateToken = (dbUser)=>{                                   //dbUser is just a parameter
    const token = jwt.sign({email:dbUser.email,role:dbUser.role},process.env.secretKey,{expiresIn:'15m'})
    return token
}


module.exports = {getHash,comparePwd,generateToken} 