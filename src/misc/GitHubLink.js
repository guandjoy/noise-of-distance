import React from "react";
import GitHubLogo from "./GitHubLogo";

function GitHubLink(props) {
  return (
    <a
      href="https://github.com/guandjoy/noise-of-distance"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo />
    </a>
  );
}

export default GitHubLink;
