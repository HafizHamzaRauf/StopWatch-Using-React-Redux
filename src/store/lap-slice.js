import { createSlice } from "@reduxjs/toolkit";

const getDoubleFigures = function (value) {
  return value > 9 ? value : "0" + value;
};
const lapSlice = createSlice({
  name: "laps",
  initialState: { laps: [] },
  reducers: {
    addLap(state, action) {
      const hour = getDoubleFigures(action.payload.hour);

      const minute = getDoubleFigures(action.payload.minute);
      const seconds = getDoubleFigures(action.payload.second);

      const time = hour + ":" + minute + ":" + seconds;

      state.laps = [time, ...state.laps];
    },
  },
});

export const lapSliceActions = lapSlice.actions;
export const lapSliceReducers = lapSlice.reducer;
