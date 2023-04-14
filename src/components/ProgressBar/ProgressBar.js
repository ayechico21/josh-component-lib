/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  // grab styles w.r.t to size needed
  const styles = SIZES[size];

  // if size is not recognized
  if (!styles) throw new Error(`Unrecognized ProgressBar size ${size}`);
  // if value is not valid
  if (value < 0 || value > 100)
    throw new Error(`Value must be between 0-100, ${value} is not valid`);

  return (
    <Wrapper
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{ "--width": value + "%", "--height": styles.height + "px" }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const SIZES = {
  small: { height: 8, radius: 4, padding: 0 },
  medium: { height: 16, radius: 4, padding: 0 },
  large: { height: 24, radius: 8, padding: 4 },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  /*inset set the box shadow to be inside the container */
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

/*Need to have bar wrapper to allow bars{especially large} to have curved corner as they approach 100%*/
const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden; /*avoid bg color overflow which hides border radius */
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
