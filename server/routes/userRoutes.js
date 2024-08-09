const express = require('express');
const multer = require('multer');
const path = require('path');
const { registerUser,loginUser,me, AllUsers, getUserById, deleteUserById, updateUserById,checkAdminStatus, getcurrentuser } = require('../controllers/userController');
// const auth = require('../middleware/authMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require("../middleware/adminMiddleware")
const router = express.Router();


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
  

// const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', upload.single('profilePicture'), registerUser);
router.post('/login', loginUser);
// router.get('/checkadmin', checkAdminStatus);
router.get('/getallusers',authMiddleware, AllUsers);
router.get('/me',authMiddleware,me);
router.post('/getcurrentuser',authMiddleware,getcurrentuser);
router.get('/users/:id',authMiddleware,getUserById);
  router.delete('/users/:id',authMiddleware, deleteUserById);
// router.get('/profile',  (req, res) => {
//     res.json({ message: 'This is a protected route', user: req.user });
//   });
  router.put('/users-update/:id',updateUserById);

  
module.exports = router;