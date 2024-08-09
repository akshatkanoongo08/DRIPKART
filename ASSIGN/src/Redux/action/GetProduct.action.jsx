

import axios from "axios";
import { homedataFailed, homedataSuccess, homedatarequest } from "../Reducers/Home.reducer";

export const homedata = () => async (dispatch) => {
  dispatch(homedatarequest());
  try {
    const { data } = await axios.get("http://localhost:5000/api/v1/products/allproducts");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",data);
    dispatch(homedataSuccess(data));
    if (!data.success) {
        //   console.log(data.message);
        throw new Error(data.message);
    }

   
  } catch (error) {
    dispatch(homedataFailed(error.message));
  }
};
