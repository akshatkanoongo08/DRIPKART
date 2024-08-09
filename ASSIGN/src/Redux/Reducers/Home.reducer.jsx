// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     isLoading:false,
//     getdata:[],
//      error:"",
// }


// const homeSlice= createSlice({
//     name:"homedata",
//     initialState,
//     reducers:{
//         homedatarequest:(state)=>{
//             state.isLoading=true

//         },

//         homedataSuccess:(state,action)=>{
//             state.isLoading=false,
//             state.getdata=action.payload.data
           
            
//         },

//         homedataFailed:(state,action)=>{
//             state.isLoading=false,
//             state.error=action.payload

//         }

//     }

// })

// export const {homedatarequest,homedataSuccess,homedataFailed}=homeSlice.actions;
// export default homeSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const homeSlice = createSlice({
  name: "homedata",
  initialState,
  reducers: {
    homedatarequest: (state) => {
      state.isLoading = true;
    },
    homedataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    homedataFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { homedatarequest, homedataSuccess, homedataFailed } = homeSlice.actions;
export default homeSlice.reducer;