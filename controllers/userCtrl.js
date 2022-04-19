const userRepos = require('../repositories/userRepos')
const alreadyExist = (e)=>{e.message && e.message.indexOf("duplicate key") > -1}
const haveValidationErr = (e)=>{e._message === 'apiUsers validation failed'}
const handleErrors = (e,res)=>{
    if(alreadyExist){
        res.status(409).send('user already exists')
    }
    else if(haveValidationErr){
        res.status(400).json(e.errors)
    }else{
        res.status(500).send('internal server error')
    }
}

const register = async(req,res)=>{
    try{
        const data = req.body;
        await userRepos.add(data)
        res.status(200)
        res.send("successfully signedup")
    }catch(e){
        handleErrors(e,res)
    }
}


module.exports = { register }