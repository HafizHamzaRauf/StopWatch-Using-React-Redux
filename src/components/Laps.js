import classes from "./Laps.module.css";
import { useSelector } from "react-redux";
const Laps = function (props) {
  const laps = useSelector((state) => state.laps.laps);
  const lapContent = laps.map((item, index) => <li key={index}>{item}</li>);

  return <ul className={classes.laps}>{lapContent}</ul>;
};

export default Laps;
