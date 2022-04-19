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
        data.createdAt = Date.now()
        await userRepos.add(data)
        res.status(200)
        res.send("successfully signedup")
    }catch(e){
        handleErrors(e,res)
    }
}


const update = async(req,res)=>{
    try{
        const email = req.params.email;
        await userRepos.update(email,req.body)
        res.status(201).send('updated')
    }catch(e){
        console.log(e)
        res.status(500)
        res.send('internl server error')
    }
}


const getUser = async (req,res)=>{
    try{
        const pageIndex = +req.params.page;
        const pageSize = +req.params.size;
        console.log(pageIndex,pageSize)
        const users =  await userRepos.getUser(pageIndex,pageSize)
        res.status(200)
        res.json(users)
        
    }catch(e){
        res.status(500).send('internal server error')
    }
}

const getUserbyEmail = async (req,res)=>{
    const email = req.params.email;
    const user = await userRepos.getUserByEmail(email)
    res.status(200).send(user)
}

module.exports = { register, update ,getUser,getUserbyEmail}