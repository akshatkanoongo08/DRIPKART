

import axios from "axios";
import { UpdateProductrequest, UpdateProductsuccess, UpdateProductfield } from "../Reducers/UpdateProduct.reducers";

export const UpdateRes = (id, name, description, price, category, imageUrl) => async (dispatch) => {
  dispatch(UpdateProductrequest());

  try {

    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    const payload = { name, description, price, category, imageUrl };
    console.log("Request Payload:", payload); 
    const { data } = await axios.put(`http://localhost:5000/api/v1/products/products/${id}`, payload,
      config);

    console.log(data);

    if (!data.success) {
      throw new Error(data.message);
    }
    dispatch(UpdateProductsuccess({ data }));
  } catch (error) {
    dispatch(
      UpdateProductfield({
        error: error.message || "Something went wrong",
      })
    );
  }
};
