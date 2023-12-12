/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

// TODO: could use inline style but is this better?
const heights = {
  small: "8px",
  medium: "12px",
  large: "24px",
};

const ProgressBar = ({ value, size }) => {
  return <Progress value={value} max={100} size={size}></Progress>;
};

export default ProgressBar;

const Progress = styled.progress`
  --borderRadius: ${(p) => (p.size === "large" ? "8px" : "4px")};

  // Note, SC performs platform specific resets
  appearance: none;

  height: ${(p) => heights[p.size]};

  // TODO: Browser says "Invalid Property Value"
  /* border-radius: var((--borderRadius)); */

  &::-webkit-progress-bar {
    border-radius: var((--borderRadius));
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &::-webkit-progress-value {
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);

    // Nice :)
    transition: width 500ms ease;

    //The inner bar should be rounded “as-needed”
    border-top-right-radius: ${(p) =>
      p.value === 100 ? "var(--borderRadius)" : "0px"};
    border-bottom-right-radius: ${(p) =>
      p.value === 100 ? "var(--borderRadius)" : "0px"};
    background-color: ${COLORS.primary};

    // TODO Does not work
    /* padding: ${(p) => (p.size === "large" ? "4px" : "0px")}; */
  }
`;
