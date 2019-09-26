import React, { useMemo, useState, useEffect } from "react";
import { morphing, spacing } from "primitivo-svg";
// Local components
import ControlPanel from "./ControlPanel";
import Composition from "./Composition";

function Scene(props) {
  const [depth, setDepth] = useState(0);

  const updateDepth = factor => {
    setDepth(depth => {
      let result = depth + factor;
      // Limit number of segment
      return result < 0 || result > 11 ? depth : result;
    });
  };

  return (
    <div className="scene">
      <ControlPanel depth={depth} updateDepth={updateDepth} />
      <Composition depth={depth} />
    </div>
  );
}

export default Scene;
