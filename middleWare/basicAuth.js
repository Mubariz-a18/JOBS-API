function authenticate(req,res,next){
    if(!req.headers.authorization){res.status(401).send('unauthorised'); return}
    const token = req.headers.authorization.split(' ')
    const encodedStr = token[1]
    const buffer = Buffer.from(encodedStr,"base64")
    const decodedStr = buffer.toString()
    const credentials = decodedStr.split(':')
    const userName = credentials[0]
    const password = credentials[1]
    if(userName === "sahil" && password === "password"){
        next()
    }else{
        res.status(401).send('unauthorised')
    }


}

module.exports = authenticate