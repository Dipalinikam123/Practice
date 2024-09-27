import mongoose from 'mongoose';
const { Schema } = mongoose;


const productSchema = new Schema({
    title: String,
    description:String,
    category:String,
    price: Number,
     discountPercentage: Number,
     rating:Number,
     tags: [String],
});

exports.Product= mongoose.model('Product',productSchema)