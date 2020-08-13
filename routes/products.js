const { Product, validate } = require("../models/Product");
const router = require("express").Router();

// GET -- Get all products
router.get("/", async (req, res) => {
  try {
    // Find all products
    const products = await Product.find();

    if (!products || products.length === 0)
      return res.status(404).send("Products not found");

    res.send(products);
  } catch (error) {
    console.log(error.message);
  }
});

// GET -- Get one product by id
router.get("/:id", async (req, res) => {
  try {
    // Find product
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Product not found");

    res.send(product);
  } catch (error) {
    console.log(error.message);
  }
});

// POST -- Create new product
router.post("/", async (req, res) => {
  try {
    // Validation
    const { error } = validate(req.body);
    if (error) return res.status(400).send("Bad request");

    // Check if product already exist
    const product = await Product.findOne({ name: req.body.name });
    if (product) return res.status(400).send("Product already exist");

    // Create product
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.send(newProduct);
  } catch (error) {
    console.log("error.message");
  }
});

// UPDATE -- Edit a product with his id
router.put("/:id", async (req, res) => {
  try {
    // Validation
    const { error } = validate(req.body);
    if (error) return res.status(400).send("Bad request");

    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) return res.status(404).send("Product not found");

    res.send(product);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) res.status(404).send("Product not found");

    res.send(product);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
