import React from "react";

import { StyledCardWrapper, StyledText } from "./Card.style";

function Card(props) {
  return (
    <StyledCardWrapper>
      <StyledText>{props.title}</StyledText>
    </StyledCardWrapper>
  );
}

export { Card };
