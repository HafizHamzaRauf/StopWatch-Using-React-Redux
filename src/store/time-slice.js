import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  time: {
    hour: 0,
    minute: 0,
    second: 0,
  },
  timer: false,
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    increaseMinute(state) {
      if (state.time.minute === 59) {
        state.time.minute = 0;
        state.time.hour++;
      } else {
        state.time.minute++;
      }
    },
    startTimer(state) {
      if (
        state.time.minute === 0 &&
        state.time.second === 0 &&
        state.time.hour === 0
      ) {
        return;
      }
      state.timer = true;
    },
    decrementSecond(state) {
      if (state.time.second >= 1) {
        state.time.second--;
      } else {
        if (state.time.minute >= 1) {
          state.time.minute--;
          state.time.second = 59;
        } else {
          if (state.time.hour > 0) {
            state.time.hour--;
            state.time.minute = 59;
            state.time.second = 59;
          }
        }
      }
      if (
        state.time.minute === 0 &&
        state.time.second === 0 &&
        state.time.hour === 0
      ) {
        state.timer = false;
      }
    },
    stopTimer(state) {
      state.timer = false;
    },
    reset(state) {
      state.timer = false;
      state.time = {
        hour: 0,
        minute: 0,
        second: 0,
      };
    },
    subtractMinute(state) {
      if (state.time.minute === 0 && state.time.hour === 0) {
        return;
      }
      if (state.time.minute === 0 && state.time.hour >= 1) {
        state.time.minute = 59;
        state.time.hour--;
      } else {
        console.log("heres");
        state.time.minute--;
      }
    },
  },
});

export const timeSliceReducers = timeSlice.reducer;
export const timeSliceActions = timeSlice.actions;
