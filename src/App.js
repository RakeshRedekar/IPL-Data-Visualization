import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import MoM from "./MoM";
import Player from "./Player";
import Stadium from "./Stadium";
import store from "./store";
import Toss from "./Toss";
import WinChart from "./WinChart";
import Winner from "./Winner";
import Years from "./Years";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((data) => data.json())
      .then((result) => dispatch({ type: "fetched", payload: result }));
  }, []);

  return (
    <div className="App">
      <Winner />
      <Years />
      <div className="bodyData">
        <div className="appCharts">
          <div className="WinChart">
            <WinChart />
          </div>
          <div className="tossChart">
            <h3>Toss-Wise Match Won</h3>
            <Toss />
          </div>
          <div className="tri">
            <MoM />
          </div>
          <div className="momImage">
            <Player />
          </div>
        </div>
        <div className="stadiumChart">
          <Stadium />
        </div>
      </div>
    </div>
  );
}

export default App;
