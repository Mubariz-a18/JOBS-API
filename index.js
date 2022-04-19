const express = require('express')
const defaultRoutes = require('./Routers/defaultRoutes')
const userRoute = require('./Routers/userRoutes')
const dataBase = require('./config/index')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000;

app.listen(port,()=>{console.log(`server is running on ${port}`)})


mongoose.connect(dataBase.dbConStr)
.then(()=>{console.log('mongo db is connected')})
.catch(()=>{console.log('failed to connect to database')})


app.use(bodyParser.json())

app.use('/',userRoute)
app.use('/',defaultRoutes)

