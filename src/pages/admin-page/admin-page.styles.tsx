import { Segment } from "semantic-ui-react";
import styled from "styled-components";

export const Flex = styled.div({
  display: "flex",
  flexWrap: "wrap",
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
  [` > button`]: {
    fontSize: "13px",
    margin: "0 0 auto auto",
  },
  [`> div`]: {
    margin: "0 0 auto auto",
  },
});

export const BackgroundTitle = styled.div({
  display: "flex",
  fontSize: "37px",
  fontWeight: "300",
  fontFamily: "Montserrat",
  margin: "0 auto 80px auto",
  width: "fit-content",
  justifyContent: "space-between",
});

export const MiddlePart = styled.div({
  display: "flex",
  margin: "40px auto auto auto",
  width: "100%",
  justifyContent: "space-between",
});

export const Block = styled.div({
  display: "block",
  width: "80%",
  [`> button`]: {
    marginLeft: "5%",
    marginBottom: "30px",
  },
});

export const OrderBox = styled.div({
  display: "block",
  width: "100%",
  padding: "30px",
});
