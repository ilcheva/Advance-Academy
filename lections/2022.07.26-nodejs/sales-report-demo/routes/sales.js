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
module.exports = salesRouter
