const mongoose = require('mongoose')
const { Schema } = mongoose;


const productSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    category: {type:String, required:true},
    price:  {type:Number, min:[0,'Wrong Rating']},
    discountPercentage: {type:Number, min:[0,'Wrong Discount'], max:50},
    rating: {type:Number, min:[0,'Wrong Rating'], max:5},
    tags: [String],
});

exports.Product = mongoose.model('Product', productSchema)