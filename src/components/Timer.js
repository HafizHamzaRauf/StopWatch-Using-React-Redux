import classes from "./Timer.module.css";
import { useSelector } from "react-redux";

const Timer = function (props) {
  const time = useSelector((state) => state.time.time);
  return (
    <div className={classes.Timer}>
      <span>{time.hour > 9 ? time.hour : "0" + time.hour}</span>:
      <span>{time.minute > 9 ? time.minute : "0" + time.minute}</span>:
      <span>{time.second > 9 ? time.second : "0" + time.second}</span>
    </div>
  );
};

export default Timer;
