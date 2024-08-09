import axios from "axios";
import { deleteProductsuccess,deleteProductFailure,deleteProductRequest } from "../Reducers/DeleteProduct.reducers";
export const  DeleteProduct=(id)=> async (dispatch)=> {
    dispatch(deleteProductRequest());
    try{
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };



        const {data}=await axios.delete(`http://localhost:5000/api/v1/products/products/${id}`
            ,config
        )
        console.log(data,'>>>>>>')
        if(!data.success){
            alert("product deleted");
            const { data } = await axios.get("http://localhost:5000/api/v1/products/allproducts");
            console.log(data,`>>>>>>>>>>>111>>>>`);
        }

        // else{
        //     throw new Error(data.message);
        // }

        dispatch(deleteProductsuccess(id))
    }catch(error){
        console.log(error);
        dispatch({
            type:deleteProductFailure,
            error:error.message || "something went worng"
        })
    };
}


// import axios from "axios";
// import {
//   deleteProductRequest,
//   deleteProductSuccess,
//   deleteProductFailure,
// } from "../Reducers/DeleteProduct.reducers";

// export const DeleteProduct = (id) => async (dispatch) => {
//   dispatch(deleteProductRequest());
//   try {
//     const { data } = await axios.delete(`http://localhost:5000/api/v1/products/products/${id}`);

//     if (!data.success) {
//       throw new Error(data.message);
//     }

//     dispatch(deleteProductSuccess(id));
//   } catch (error) {
//     console.log(error);
//     dispatch(deleteProductFailure({
//       error: error.message || "something went wrong"
//     }));
//   }
// };
