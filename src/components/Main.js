import { useDispatch, useSelector } from "react-redux";
import classes from "./Main.module.css";
import { timeSliceActions } from "../store/time-slice";
import { useEffect } from "react";
import { lapSliceActions } from "../store/lap-slice";

let firstTime = true;
const Main = function (props) {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.time.timer);
  const time = useSelector((state) => state.time.time);
  const plusHandler = () => {
    dispatch(timeSliceActions.increaseMinute());
  };
  const startHandler = () => {
    dispatch(timeSliceActions.startTimer());
  };
  const stopHandler = () => {
    dispatch(timeSliceActions.stopTimer());
  };

  const resetHandler = () => {
    dispatch(timeSliceActions.reset());
  };
  const lapsHandler = () => {
    if (timer) {
      dispatch(lapSliceActions.addLap(time));
    }
  };
  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    if (!timer) {
      return;
    }
    const id = setInterval(() => {
      dispatch(timeSliceActions.decrementSecond());
    }, 1000);
    return () => clearInterval(id);
  }, [timer]);

  const subtractHandler = () => {
    dispatch(timeSliceActions.subtractMinute());
  };
  return (
    <div className={classes.main}>
      <button onClick={plusHandler}>+</button>
      <button onClick={startHandler}>Start</button>

      <button onClick={stopHandler}>Stop</button>
      <button onClick={lapsHandler}> Lap</button>
      <button onClick={resetHandler}> Reset</button>

      <button onClick={subtractHandler}>-</button>
    </div>
  );
};
export default Main;
