// controllers/productController.js

const Product = require('../models/product');

// Create a new product
const createProduct = async (req, res) => {
  const { name, description, price,category,imageUrl} = req.body;

  console.log(imageUrl,"<<<>>>>","request")

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'Name, description, and price are required' });
  }

  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a product by ID
const updateProductById = async (req, res) => {
    const { name, price, description, category,imageUrl } = req.body;
    // const image = req.file ? req.file.path : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pacific-research.com%2Foptimizing-the-3-stages-of-new-product-development-prl%2F&psig=AOvVaw131lq_sax_sOcuYQIuT14e&ust=1723031482989000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDIqNam4IcDFQAAAAAdAAAAABAE";
  
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      if (name) product.name = name;
      if (description) product.description = description;
      if (price) product.price = price;
      if (category) product.category = category;
      if (imageUrl) product.imageUrl = imageUrl;
  
      await product.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

// Delete a product by ID
const deleteProductById = async (req, res) => {
  try {
    console.log(req.params.id)
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
module.exports = {createProduct,getAllProducts,getProductById,updateProductById,deleteProductById}



// const updateProductById=async(req,res)=>{
//     const{name}
// }