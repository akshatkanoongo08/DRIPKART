import React, { useEffect, useState } from 'react'
import SideBar from './compo/SideBar';
import CreateProduct from './CreateProduct';
import VIewProduct from './VIewProduct';
import "../Admin.page/Admin.css";
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Admin = () => {
  // route
  const navigate = useNavigate();
    const [view,setView] = useState("create");
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
  console.log("Admin page from outside useEffect")
    useEffect(()=>{
      console.log("Admin page ")
      getCurrentUserData()


    },[])

    const getCurrentUserData = async () => {
      try {
        const token = localStorage.getItem("token")
  
        if(!token){
          // redirect to login page
          navigate('/');
  
          return;
        }
  
        const res = await axios.get("http://localhost:5000/api/v1/user/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
          
  
          console.log("res.status: ",res.status)
          console.log("res.data: ",res.data)
  
          if (res?.data?.role == "Admin") {
              // message.success('Authenticated');
          } else {
            navigate('/homepage');
            // message.error(res.data.message || 'Authentication failed');
          }
      } catch (error) {
        navigate('/homepage');
          console.log(error)
          console.error('Authentication error:', error.response?.data || error.message);
          // message.error(error.response?.data?.message || 'Something went wrong');
      }
  };
  

  return (
    <div className="admin-page">
         {/* <ResponsiveAppBar/>  */}
        <SideBar setView={setView}   />
        <div className="content">
          {view === "create" && <CreateProduct setView={setView} />}
          {view === "view" && <VIewProduct /> }
          {view === "update" && <ProductUpdate/> }

        </div>
      </div>
  )
}
