const express = require('express')
const carsCtrl = require('../controllers/carsCtrl')
const router =express.Router()


router.get('/',carsCtrl.get)
router.post('',carsCtrl.create)
router.delete('/:id',carsCtrl.delete)
router.put('/:id',carsCtrl.update)
router.patch('/:id',carsCtrl.patch)
router.get('/:id',carsCtrl.getById)

module.exports = router