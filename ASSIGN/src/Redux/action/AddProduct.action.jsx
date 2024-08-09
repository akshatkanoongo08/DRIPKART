import axios from "axios"
import { AddproductRequest,AddproductSuccess,AddproductField } from "../Reducers/AddProduct.reducers"
export const Addproduct = (name, description, price, category, imageUrl) => async (dispatch) => {
    dispatch({
        type: AddproductRequest
    });

    try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };

        const payload = { name, description, price, category, imageUrl };
        console.log("Request Payload:", payload); // Log payload

        const { data } = await axios.post(
            "http://localhost:5000/api/v1/products/addproducts",
            payload,
            config
        );
console.log(data)
        if (!data.success) {
            console.log(data.message);
            throw new Error(data.message);
        }

        dispatch({
            type: AddproductSuccess,
            payload:data,
        });

    } catch (error) {
        console.log("Error:", error.response?.data || error.message); // Log error details
        dispatch({
            type: AddproductField,
            payload: {
                error: error.response?.data?.message || 'Something went wrong'
            }
        });
    }
};


