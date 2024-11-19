import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, requiered: true},
    description: { type: String, requiered: true},
    price: { type: Number, requiered: true},
    image: { type: Array, requiered: true},
    category: { type: String, requiered: true},
    subCategory: { type: String, requiered: true},
    sizes: { type: Array, requiered: true},
    bestseller: {type: Boolean},
    date: {type: Number, requiered: true}
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel