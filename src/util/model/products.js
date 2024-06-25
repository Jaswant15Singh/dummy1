import mongoose from "mongoose"
const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    category:String
})

export const Product=mongoose.models.products || mongoose.model("products",productSchema);