import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  slug: String,
  price: Number,
  image: String,
  category: String,
  brand: String,
  rating: Number,
  countInStock: Number,
  description: String,
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", productSchema);