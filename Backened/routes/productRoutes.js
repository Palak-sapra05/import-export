const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/* ADD PRODUCT */
router.post("/add", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

/* GET ALL PRODUCTS */
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

/* INVENTORY COUNT */
router.get("/count", async (req, res) => {
    const count = await Product.countDocuments();
    res.json({ inventory: count });
});

/* DELETE PRODUCT */
router.delete("/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
});

module.exports = router;
