import { configureStore } from "@reduxjs/toolkit";
import { lapSliceReducers } from "./lap-slice";
import { timeSliceReducers } from "./time-slice";

const store = configureStore({
  reducer: {
    time: timeSliceReducers,
    laps: lapSliceReducers,
  },
});

export default store;
