import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userrole",
  initialState: {
    userrole: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userrole = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;