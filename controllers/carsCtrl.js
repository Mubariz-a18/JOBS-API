const allCars = [
    {
        id: 1,
        name: 'farari',
        price:2000

    }, {
        id: 2,
        name: 'volkwagon',
        price:2000

    }, {
        id: 3,
        name: 'bmw',
        price:2000

    }
]


class carsCtrl {
    get(req, res) {

        res.json(allCars)
        res.status(200)
    }
    getById(req, res) {
        const id = + req.params.id
        let carses
        for (var i = 0; i < allCars.length; i++) {
            if (allCars[i].id === id) {
                carses = allCars[i]
                break
            }

        }
        if (carses) {
            res.json(carses)
            res.status(200)
        } else {
            res.json('404 not found')
            res.status(400)
        }
    }
    create(req, res) {

        allCars.push(req.body)
        res.json('new car is created')
        res.status(204)
    }
    delete(req, res) {
        var id = +req.params.id;
        for (var i = 0; i < allCars.length; i++) {
            if (allCars[i].id === id) {
                allCars.splice(i,1)
                break
            }
           
        }
        res.status(204)
        res.send()
    }
    update(req,res){
        if(req.params.name ){
            res.status(400)
            res.send('bad request')
        }else{
            const id = +req.params.id
            const body = req.body.name
            for(var i = 0; i<allCars.length;i++){
                if(allCars[i].id===id){
                    allCars[i].name = body
                }
            }
            res.status(204)
            res.send()
        }
    }
    patch(req,res){
        const id  = +req.params.id
        delete req.params.id
        const body = req.body
        for(var i = 0 ; i<allCars.length;i++){
            if(allCars[i].id == id){
                for(let key in body){
                    allCars[i][key]=body[key]
                }
            }
        }
        res.status(204)
        res.send()
    }
}

const cars = new carsCtrl

module.exports = cars
