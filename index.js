const express = require('express')
const carRoutes = require('./Routers/CarsRoutes')
const defaultRoutes = require('./Routers/defaultRoutes')
const app = express()
const bodyPasrser = require('body-parser')

app.listen(3000,function ()
    {console.log('server is running on port 3000')
})

app.use(bodyPasrser.json())


app.use('/api/cars',carRoutes)


app.use('/',defaultRoutes)