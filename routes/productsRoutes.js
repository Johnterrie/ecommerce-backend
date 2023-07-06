const express = require("express");
const router = express.Router();  
const verifyToken = require('../middleware/token.js')  

const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productsController")

// router.route("/").get(verifyToken, getAllProducts).post(verifyToken, createProduct)
// router.route("/:id").get(verifyToken, getSingleProduct).patch(verifyToken, updateProduct).delete(verifyToken, deleteProduct)   


module.exports = router