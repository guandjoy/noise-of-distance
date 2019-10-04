import React from "react";
import ReactDOM from "react-dom";

import GitHubLink from "./misc/GitHubLink";
import Caption from "./misc/Caption";
import Scene from "./Scene";

import "./styles.css";
import "@material/react-button/dist/button.css";

function App() {
  return (
    <div className="App">
      <Scene />
      <GitHubLink />
      <Caption topic="Noise of distance" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
