import { createSlice } from "@reduxjs/toolkit";

import { getUserProfile } from "./userFunctions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: null,
    userLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => ({
        ...state,
        userLoading: true,
      }))
      .addCase(getUserProfile.rejected, (state) => ({
        ...state,
        userLoading: false,
        userProfile: null,
      }))
      .addCase(getUserProfile.fulfilled, (state, action) => ({
        ...state,
        userLoading: false,
        userProfile: action.payload,
      }));
  },
});

export default userSlice.reducer;
