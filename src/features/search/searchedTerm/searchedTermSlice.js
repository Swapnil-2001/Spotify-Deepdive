import { createSlice } from "@reduxjs/toolkit";

const searchedTermSlice = createSlice({
  name: "searchedTerm",
  initialState: {
    searchedTerm: "",
    searchedType: "tracks",
  },
  reducers: {
    addSearchedTerm: (state, action) => ({
      ...state,
      searchedTerm: action.payload,
    }),
    addSearchedType: (state, action) => ({
      ...state,
      searchedType: action.payload,
    }),
  },
});

export const { addSearchedTerm, addSearchedType } = searchedTermSlice.actions;

export default searchedTermSlice.reducer;
