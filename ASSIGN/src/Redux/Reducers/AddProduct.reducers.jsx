import { createSlice } from "@reduxjs/toolkit";
const initialState={
    
    isLoading:false,
    data:[],
    error:"",

}

const AddProducts=createSlice({
    name:"addproducts",
    initialState,
    reducers:{
        AddproductRequest(state){
       state.isLoading=true,
       state.error=null


        },

        AddproductSuccess(state,action){
            state.isLoading=false;
            state.data=action.payload;
            state.error = "";

        },

        AddproductField(state,action){
            state.isLoading=false,
            state.error=action.payload

        }
    }

})


export const {AddproductRequest,AddproductSuccess,AddproductField}=AddProducts.actions;
export default AddProducts.reducer;