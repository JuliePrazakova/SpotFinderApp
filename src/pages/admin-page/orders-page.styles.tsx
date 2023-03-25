import { Segment } from "semantic-ui-react";
import styled from "styled-components";

export const Flex = styled.div({
  display: "flex",
  flexWrap: "wrap",
  width: "80%",
  justifyContent: "space-around",

  [`> div`]: {
    width: "40%",
  },
  [`${Segment}`]: {
    margin: "auto",
    [`> div`]: {
      margin: "5px",
    },
  },
});
