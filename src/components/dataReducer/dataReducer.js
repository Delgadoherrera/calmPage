import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  formReducer: {},
};

const dataReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    formValue: (state, action) => {
      console.log("action payload is open", action.payload);
      state.formReducer = action.payload;
    },
  },
});

export const { formValue } = dataReducer.actions;

export const formAction = (state) => state.counter.formReducer;

export default dataReducer.reducer;
