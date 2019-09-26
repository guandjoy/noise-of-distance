import React, { useMemo, useState, useEffect } from "react";
import { morphing, spacing } from "primitivo-svg";
// Local components
import ControlPanel from "./ControlPanel";
import Composition from "./Composition";

function Scene(props) {
  const [numOfSegments, setNumOfSegments] = useState(2);

  const updateNumOfSegments = factor => {
    setNumOfSegments(numOfSegments => {
      let result = numOfSegments + factor;
      // Limit number of segment
      return result < 2 ? numOfSegments : result;
    });
  };

  return (
    <div className="scene">
      <ControlPanel
        numOfSegments={numOfSegments}
        updateNumOfSegments={updateNumOfSegments}
      />
      <Composition numOfSegments={numOfSegments} />
    </div>
  );
}

export default Scene;
