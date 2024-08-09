// const express = require('express');
// const router = express.Router();
// const {
//   createProduct,
//   getProducts,
//   getProduct,
//   updateProduct,
//   deleteProduct
// } = require('../controllers/productController');
// const authMiddleware = require('../middleware/authMiddleware');
// const adminMiddleware = require('../middleware/adminMiddleware');
// const multer = require('multer');

// const upload = multer({ dest: 'uploads/' });
// router.get('/admin/dashboard', adminMiddleware, (req, res) => {
//     res.send('Welcome to the admin dashboard');
//   });
  


// router.post('/create', upload.single('image'), createProduct);
// router.get('/get-products',authMiddleware, getProducts);
// router.get('/get-a-product/:id',authMiddleware,  getProduct);
// router.put('/update-product/:id', authMiddleware, updateProduct);
// router.delete('/delete-product/:id', authMiddleware, deleteProduct);

// module.exports = router;



// routes/productRoutes.js

const express = require('express');
const router = express.Router();

const multer = require('multer');
const { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
// const adminMiddleware = require('../middleware/adminMiddleware')
// const authMiddleware = require('../middleware/authMiddleware');
//  const adminMiddleware = require('../middleware/adminMiddleware');

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Product routes
//   router.delete('/users/:id',authMiddleware, deleteUserById);
router.post('/addproducts',upload.single('imageUrl'),authMiddleware, adminMiddleware,createProduct);
router.get('/allproducts', getAllProducts);
router.get('/products/:id',authMiddleware, adminMiddleware,getProductById);
router.put('/products/:id', upload.single('imageUrl'),authMiddleware, adminMiddleware, updateProductById);
router.delete('/products/:id',authMiddleware, adminMiddleware,deleteProductById);

module.exports = router;
