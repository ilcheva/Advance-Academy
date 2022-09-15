let mongoose = require('mongoose')
SalesSchema = new mongoose.Schema({
    itemId: String,
    itemName: String,
    itemPrice: Number,
    itemQuantity: Number,
    // totalPrice: Number,
    updated: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Sales', SalesSchema)
