class Bikes {
    get(req,res) {
        const bike = [
            {
                id: '01',
                name: 'yamaha'
            }, {
                id: '02',
                name: 'apache'
            }, {
                id: '03',
                name: 'pulsur'
            }
        ]
        res.json(bike)
        res.status(204)
    }
}

const BikeCtrl = new Bikes()

module.exports = BikeCtrl
