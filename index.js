const express = require('express')
const defaultCtrl = require('./constrollers/defaultCtrl')

const app = express()

app.listen(3000,function ()
    {console.log('server is running on port 3000')
})


app.get('/bike',function (req,res){
    const bike =[ {
                   id : ' 02',
                    name:'yamaha'
               },{
                id : ' 02',
                name:'apache'
               },
               {
                id : ' 03',
                name:'pulsur'
               }
            ]
    res.json(bike)
    res.status(204)
})
app.get('/',defaultCtrl.home)
app.get('/health',defaultCtrl.health)