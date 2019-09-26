import React from "react";
import ReactDOM from "react-dom";

import GitHubLogo from "./misc/GitHubLogo";
import Caption from "./misc/Caption";
import Composition from "./Composition";
import Scene from "./Scene";

import "./styles.css";
import "@material/react-button/dist/button.css";

function App() {
  return (
    <div className="App">
      <a href="https://github.com/guandjoy/sequence-of-polygons">
        <GitHubLogo />
      </a>
      <Caption topic="Noise of distance" />
      <Scene />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
