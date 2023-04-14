import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <span>{displayedValue}</span>
      <Icon id={"chevron-down"} size={20} strokeWidth={2}></Icon>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  display: flex;
  gap: 24px;
  width: max-content;
  border-radius: 8px;
  padding: 12px 16px;
  position: relative;
  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export default Select;
