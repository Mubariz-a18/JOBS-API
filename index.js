const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const defaultRoutes = require('./Routers/defaultRoutes')
const userRoute = require('./Routers/userRoutes')
const dataBase = require('./config/index')



const app = express()
const port = 3000;


const dir = path.join(__dirname,"logs")
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

var LogStream = fs.createWriteStream(path.join(__dirname, 'logs','request.logs'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: LogStream }))


app.listen(port,()=>{console.log(`server is running on ${port}`)})


mongoose.connect(dataBase.dbConStr)
.then(()=>{console.log('mongo db is connected')})
.catch(()=>{console.log('failed to connect to database')})


app.use(bodyParser.json())
app.use('/',defaultRoutes)
app.use('/',userRoute)

