const express = require('express')
const defaultRoutes = require('./Routers/defaultRoutes')
const app = express()

const port = 3000;

app.listen(port,()=>{console.log(`server is running on ${port}`)})
app.use('/',defaultRoutes)

