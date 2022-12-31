import classes from "./App.module.css";
import Laps from "./components/Laps";
import Main from "./components/Main";
import Timer from "./components/Timer";
import { Provider } from "react-redux";
import store from "./store/index";
const App = function () {
  return (
    <Provider store={store}>
      <h1 className={classes["primary-heading"]}>StopWatch</h1>
      <Timer></Timer>
      <Main></Main>
      <Laps></Laps>
    </Provider>
  );
};
export default App;
