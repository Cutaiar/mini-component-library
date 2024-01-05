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
  return (
    <Progress
      role="progressbar"
      aria-label="progress bar"
      aria-valuenow={value}
      size={size}
    >
      <BarWrapper>
        <Bar size={size} value={value}>
          <VisuallyHidden>{`${value}%`}</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Progress>
  );
};

export default ProgressBar;

const Progress = styled.div`
  height: ${(p) => heights[p.size]};
  min-width: 370px;
  border-radius: ${(p) => (p.size === "large" ? "8px" : "4px")};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${(p) => (p.size === "large" ? "4px" : "0px")};
`;

const Bar = styled.div`
  width: ${(p) => p.value + "%"};
  height: 100%;
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};

  // Nice :)
  transition: width 500ms ease;
`;

// Exists to round inner bar edges via clipping on all sizes
const BarWrapper = styled.div`
  border-radius: 4px;
  height: 100%;
  /* Clip inner bar to curved edge */
  overflow: hidden;
`;
