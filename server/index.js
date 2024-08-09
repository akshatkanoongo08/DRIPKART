const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const userRoutes = require("./routes/userRoutes"); // Import the user routes
const productRoutes=require("./routes/productRoutes");
const cors= require('cors')
const app = express();
const PORT = 5000;
require('dotenv').config();

// const auth = require('./middleware/authMiddleware');


// app.use(cors({
//   origin: 'http://localhost:5173', // Allow requests from this origin
//   methods: 'GET, POST, PUT, DELETE', // Allow specific methods
//   allowedHeaders: 'Content-Type, Authorization' // Allow specific headers
// }));


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the uploads directory

// Set up multer for profile picture upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Connect to MongoDB
mongoose.connect('mongodb+srv://akshat:3fNCB3nXGqU4xPkY@ecommerce.hpizude.mongodb.net/database', {
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/products', productRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
