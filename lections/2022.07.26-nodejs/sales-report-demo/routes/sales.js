const Sales = require('../models/sales')

let express = require('express'),
    salesRouter = express.Router()

/// GET ALL SALES

salesRouter.get('/', (req, res) => {
    Sales.find({})
        .then((sales) => res.json(sales))
        .catch((err) => err)
})
//POST SALE

salesRouter.post('/', (req, res, next) => {
    Sales.create(req.body, (err, sales) => {
        if (err) {
            console.log(err)
            return next(err)
        }
        res.json(sales)
    })
})
//PUT request

salesRouter.put('/:id', (req, res, next) => {
    Sales.findByIdAndUpdate(req.params.id, req.body, (err, sales) => {
        err ? next(err) : res.json(sales)
    })
})

//DELETE request

salesRouter.delete('/:id', (req, res, next) => {
    Sales.findByIdAndRemove(req.params.id, req.body, (err, sales) => {
        err ? next(err) : res.json(sales)
    })
})
module.exports = salesRouter
