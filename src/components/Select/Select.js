import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Root>
      <NativeSelect aria-label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>
        {displayedValue}
        <PositionedIcon id="chevron-down" size={24} strokeWidth={2} />
      </Presentation>
    </Root>
  );
};

const NativeSelect = styled.select`
  appearance: none; /* Remove any strange user agent behavior */
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const Presentation = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;

  /* Since native select is in front of everything, 
  we need to listen in on its hover and focus events 
  to apply styles to our presentation */
  ${NativeSelect}:hover ~ & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121; /* Fallback */
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const Root = styled.div`
  width: max-content;
  position: relative;
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
