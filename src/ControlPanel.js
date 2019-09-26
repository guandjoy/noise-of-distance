import React from "react";
import Button from "@material/react-button";

function ControlPanel({ numOfSegments, updateNumOfSegments }) {
  return (
    <div className="control-panel">
      <Button
        id="decrease"
        dense={true}
        disabled={numOfSegments === 2}
        className="material-button"
        onClick={() => updateNumOfSegments(-1)}
      >
        -
      </Button>
      <div id="num-of-segments">{numOfSegments}</div>
      <Button
        id="increase"
        dense={true}
        className="material-button"
        onClick={() => updateNumOfSegments(+1)}
      >
        +
      </Button>
    </div>
  );
}

export default ControlPanel;
