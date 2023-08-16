import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const dataReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    isOpen: (state, action) => {
      console.log("action payload is open", action.payload);
      state.isOpened = action.payload;
    },
  },
});

export const { isOpen } = dataReducer.actions;

export const openModal = (state) => state.counter.isOpened;

export default dataReducer.reducer;
