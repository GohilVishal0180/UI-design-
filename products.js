import { connect } from "../../utils/db";
import Product from "../../models/Product";

export default async function handler(req, res) {
  await connect();
  const products = await Product.find({});
  res.status(200).json(products);
}