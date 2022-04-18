const mongoose = require('mongoose')
const dataBase = require('../config/index')
function get(req,res){
    res.json("Node api")
    res.status(201)
}

async function health(req,res){
    try{
        await mongoose.connect(dataBase.dbConStr)
        res.json({db:"up"})
        res.status(201)
    }catch(e){
        res.send(e,'internal server error')
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