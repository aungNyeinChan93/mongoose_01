import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Schema.Types.Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    createAt: { type: Date, default: Date.now }
});

productSchema.index({ name: 1 })

const Product = model('Product', productSchema, 'products');

export default Product;