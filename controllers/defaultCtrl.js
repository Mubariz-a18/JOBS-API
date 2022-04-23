const mongoose = require('mongoose')
const logger = require('../logger')
const dataBase = require('../config/index')
function get(req,res){
    res.json("Node api")
    res.status(201)
}

async function health(req,res){
    try{
        logger.info({message:'user requested for health endpoint'})
        await mongoose.connect(dataBase.dbConStr)
        res.status(201)
        res.json({db:"up"})
        logger.info({message:'database is connectd'})
        mongoose.connection.close()
    }catch(e){
        logger.error({message:'database failed to connected',error:e})
        console.log(e)
        res.send('internal server error')
        res.status(500)
    }
   
   
   
    // .then(()=>{
    //     res.json({db:"up"})
    //     res.status(201)
    // })
    // .catch(()=>{
    //     res.status(500);
    //     res.send('internal servedr error')
    // })
}

module.exports = {get,health}