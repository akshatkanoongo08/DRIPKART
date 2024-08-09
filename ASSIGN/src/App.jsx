import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import SignUp from '../src/pages/SignUp';
 import Login from '../src/pages/Login';
// import Product from '../src/pages/Product'; 

import PublicRoute from '../src/components/PublicRoute';
import { Admin } from './pages/Admin.page/Admin';
import ProductUpdate from './pages/Admin.page/ProductUpdate';
import axios from 'axios';
function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/homepage"
            element={
            
              
                <HomePage />
                
              
            }
          />
          {/* <Route
            path="/product/:id"
            element={
              < >
                <Product />
              </>
            }
          /> */}
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
          path="/admin"
          element={
            <>
               <Admin/>
            </>
             
             }/>
            
            <Route path='update/:id'
            element={<ProductUpdate/>}/>

            


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;