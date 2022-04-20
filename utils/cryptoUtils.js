const bcrypt = require('bcrypt')

const getHash = (password)=>{
    return bcrypt.hash(password,1)
}

const comparePwd = (password,hashedPwd)=>{
    return bcrypt.compare(password,hashedPwd)
}

module.exports = {getHash,comparePwd}