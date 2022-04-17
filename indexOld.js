// const mobile = {
//     width :34,
//     height:98
// }
//json.stringyfy is used to convert the data into string 
// const str  = JSON.stringify(mobile)       


// console.log(str)

// const parse = JSON.parse(str)

// console.log(parse)

// const http = require('http')


// http.createServer(handleReq).listen(3000,function (){
//     console.log('server is running on port 3000')
// })

// function handleReq(req,res){
//     if(req.url =='/'){
//         res.write('node home')
//         res.end()
//     }
//     if(req.url == '/bike'){
//        const bike =[ {
//            id : ' 1',
//             name:'yamaha'
//        },{
//         id : ' 2',
//         name:'apache'
//        },
//        {
//         id : ' 3',
//         name:'pulsur'
//        }
//     ]
//         res.write(JSON.stringify(bike))
//         res.end()
//     }
//     if(req.url == '/cars'){
//         const cars =[ {
//             id : ' 1',
//              name:'lambo'
//         },{
//          id : ' 3',
//          name:'bmw'
//         },
//         {
//          id : ' 3',
//          name:'audi'
//         }
//      ]
//         res.write(JSON.stringify(cars))
//         res.end()
//     }
//     else{
//         res.write('not found')
//         res.end()
//     }
// }
