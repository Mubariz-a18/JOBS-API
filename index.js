const express = require('express')
const defaultCtrl = require('./controllers/defaultCtrl')
const BikeCtrl = require('./controllers/bikesctrl')
const carsCtrl = require('./controllers/carsCtrl')
const app = express()
const bodyPasrser = require('body-parser')

app.listen(3000,function ()
    {console.log('server is running on port 3000')
})

app.use(bodyPasrser.json())


app.get('/bike',BikeCtrl.get)
app.get('/cars',carsCtrl.get)
app.post('/cars',carsCtrl.create)
app.delete('/cars/:id',carsCtrl.delete)
app.put('/cars/:id',carsCtrl.update)
app.patch('/cars/:id',carsCtrl.patch)
app.get('/cars/:id',carsCtrl.getById)
app.get('/',defaultCtrl.home)
app.get('/health',defaultCtrl.health)