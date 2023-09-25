const mongoose = require('mongoose')

const Product = mongoose.model('Product',{
    name: String,
    color: String,
    price :Number,
    description :String,
    approved : Boolean,

})
module.exports = Product