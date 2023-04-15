import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={styles.iconSize}></Icon>
      </IconWrapper>
      <Input
        type="text"
        style={{
          "--font-size": styles.fontSize + "rem",
          "--width": width + "px",
          "--padding": styles.iconSize + styles.space + "px",
        }}
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  );
};

const SIZES = {
  small: { space: 10, fontSize: 14 / 16, iconSize: 14 },
  large: { space: 17, fontSize: 18 / 16, iconSize: 18 },
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray500};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute; /*Brings element out of doc flow */
  top: 0;
  left: 0;
  pointer-events: none; /*Disable icon mouse events so that input below icon can get the mouse event */
`;

const Input = styled.input`
  color: inherit;
  width: var(--width);
  font-size: var(--font-size);
  font-weight: 700;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: var(--padding);
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray300};
    font-weight: 400;
  }
`;

export default IconInput;
