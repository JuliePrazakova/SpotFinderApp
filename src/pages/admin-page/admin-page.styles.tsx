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

export const Title = styled.div({
  display: "flex",
  fontSize: "17px",
  fontWeight: "800",
  width: "100%",
  justifyContent: "space-between",
  [`> button`]: {
    fontSize: "13px",
    margin: "0 0 auto auto",
  },
});
