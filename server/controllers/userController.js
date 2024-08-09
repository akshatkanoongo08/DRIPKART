const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
// const { useParams } = require('react-router-dom');



const registerUser = async (req, res) => {
    const { username, email, password, bio, role} = req.body;
    const profilePicture = req.file ? req.file.path : undefined;
  
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Username, email, and password are required' });
    }
  
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
 
      const user = new User({ username, email, password, profilePicture, bio,role });
      console.log(user)
      await user.save().then(() => console.log('Test user saved'))
      .catch(err => console.error('Error saving test user:', err));
 
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const userPayload = {
        _id: user._id,
        username: user.username,
        email: user.email,
        bio: user.bio,
        profilePicture: user.profilePicture,
        role : user.role
      };
  
      // Ensure to use process.env.JWT_SECRET
      const token = jwt.sign(userPayload, "AKSHAT", { expiresIn: '2h' });
  
      res.status(200).json({ message: 'Login successful', token,userPayload });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
const checkAdminStatus = async (req, res) => {
  console.log(req.headers.authorization)
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from headers

  if (!token) {
    return res.status(401).json({ isAdmin: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    const user = await User.findById(decoded._id); // Find user by ID
    console.log(decoded)
    if (user && user.isAdmin) {
      return res.status(200).json({ isAdmin: true });
    } else {
      return res.status(200).json({ isAdmin: false });
    }
  } catch (error) {
    return res.status(401).json({ isAdmin: false });
  }
};

const AllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "server error" });
  }
};
const getcurrentuser = async(req,res)=>{
  
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  // console.log("ltokennn",token)
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    
    if (!user) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    // req.user = user; // Attach user to the request object
   return res.send(user);
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

const me = async(req,res)=>{
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  
  // console.log("ltokennn",token)
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    
    if (!user) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    if(user.role != "Admin"){
      return res.status(401).json({message:"Invalid user"});
    }

    // req.user = user; // Attach user to the request object
   return res.send(user);
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

  const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  const updateUserById = async (req, res) => {
    const { username, email, password, bio } = req.body;
    const profilePicture = req.file ? req.file.path : undefined;
  
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (username) user.username = username;
      if (email) user.email = email;
      if (password) user.password = await bcrypt.hash(password, 12);
      if (bio) user.bio = bio;
    //   if (profilePicture) user.profilePicture = profilePicture;
  
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  const deleteUserById = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
module.exports = { registerUser, loginUser, me,AllUsers,getcurrentuser,getUserById,updateUserById,deleteUserById,checkAdminStatus };