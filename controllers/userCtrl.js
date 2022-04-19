const userRepos = require('../repositories/userRepos')


const register = async(req,res)=>{
    try{
        const data = req.body;
        await userRepos.add(data)
        res.status(200)
        res.send("successfully signedup")
    }catch(e){
        if(e._message === 'apiUsers validation failed'){
            res.status(400)
            // console.log(e.errors)
            res.json(e.errors)
        }else{
            res.status(500)
            res.send('internal server error')
        }
    }
}


module.exports = { register }