import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(()=>{
    console.log("only on admin routes")
    getCurrentUserData(); 
  },[]);

  const getCurrentUserData = async () => {
    try {
      const token = localStorage.getItem("token")

      if(!token){
        // redirect to login page
        navigate('/login');

        return;
      }

      const res = await axios.get("http://localhost:5000/api/v1/user/me", {
        headers: { Authorization: `Bearer ${token}` }
      });
        

        console.log("res.status: ",res.status)
        console.log("res.data: ",res.data)

        if (res?.data?.role == "Admin") {
            message.success('Authenticated');
        } else {
          navigate('/homepage');
          message.error(res.data.message || 'Authentication failed');
        }
    } catch (error) {
      navigate('/homepage');
        console.log(error)
        console.error('Authentication error:', error.response?.data || error.message);
        message.error(error.response?.data?.message || 'Something went wrong');
    }
};



  
  return children;
};

export default ProtectedRoute;
