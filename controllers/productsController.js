const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      method: "product added",
      product,
    });
  } catch (error) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      method: "get all products",
      count: getAllProducts.length,
      product,
    });
  } catch (error) {
    console.error("Error retrieving products:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).send({
      method: "get single product",
      product,
    });
  } catch (error) {
    console.error("Error retrieving product:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return res.status(404).json({ message: `No product with id : ${id}`});
  }

  res.status(200).json({
    method: "updated",
    product,
  });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findByIdAndRemove({ _id: id });

  if (!product) {
    return res.status(404).json({ message: `No product with : ${id} found`});
  }
  res.status(200).json({ msg: "Success! Product removed." });
};


module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
