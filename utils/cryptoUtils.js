const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const getHash = (password)=>{
    return bcrypt.hash(password,1)
}

const comparePwd = (password,hashedPwd)=>{
    return bcrypt.compare(password,hashedPwd)
}

const generateToken = (dbUser)=>{                                   //dbUser is just a parameter
    const token = jwt.sign({email:dbUser.email,role:dbUser.role},'mubariz123$',{expiresIn:'15m'})
    return token
}


module.exports = {getHash,comparePwd,generateToken}