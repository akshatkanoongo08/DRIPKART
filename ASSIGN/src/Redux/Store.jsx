import { configureStore } from "@reduxjs/toolkit";
import AddProductReducers from "./Reducers/AddProduct.reducers";
import {thunk}  from "redux-thunk";
import HomeReducer from "./Reducers/Home.reducer";
import UpdateProductReducers from "./Reducers/UpdateProduct.reducers";
import DeleteProductReducers from "./Reducers/DeleteProduct.reducers";
import { userSlice } from "./Reducers/userSlice";
export const store =configureStore({
    reducer:{
        addproducts:AddProductReducers,
        home:HomeReducer,
        updateProd:UpdateProductReducers,
        deleteProduct:DeleteProductReducers,
        users:userSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    
});