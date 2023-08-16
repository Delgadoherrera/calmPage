import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./dataReducer/dataReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
