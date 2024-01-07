import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = styles[size];
  return (
    <Root
      width={width + "px"}
      style={{ "--border-width": style.strokeWidth + "px" }}
    >
      <PositionedIcon
        id={icon}
        size={style.iconSize}
        strokeWidth={style.strokeWidth}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeInput
        placeholder={placeholder}
        width={width}
        type={"text"}
        style={{
          "--font-size": style.fontSize + "px",
          "--padding": style.padding + "px",
        }}
      />
    </Root>
  );
};

export default IconInput;

const styles = {
  small: {
    strokeWidth: 1,
    iconSize: 16,
    fontSize: 14,
    padding: 24,
  },
  large: {
    strokeWidth: 2,
    iconSize: 24,
    fontSize: 18,
    padding: 36,
  },
};

const NativeInput = styled.input`
  /* Reset border and padding */
  border: none;
  padding: 0;

  font-size: var(--font-size);
  font-weight: 700;

  padding-block: 8px;
  padding-left: var(--padding);
  width: 100%;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover::placeholder {
    color: ${COLORS.black};
  }

  &:focus-visible {
    outline: 1px dotted #212121; /* Fallback */
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 3px;
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
`;

const Root = styled.div`
  position: relative;
  width: ${(p) => p.width};
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
