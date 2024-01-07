import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = styles[size];
  return (
    <Root
      style={{
        "--width": width + "px",
      }}
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
          "--border-width": style.strokeWidth + "px",
          "--font-size": style.fontSize / 16 + "rem",
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
  width: var(--width);
  color: inherit;
  outline-offset: 4px;
  border-bottom: var(--border-width) solid ${COLORS.black};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  /* Make sure the placeholder also responds to hover */
  &:hover::placeholder {
    color: ${COLORS.black};
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;

const Root = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
