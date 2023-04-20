import styled from "styled-components";

export const Box = styled.div({
  display: "flex",
  justifyContent: "space-around",
  position: "relative",
  width: "80%",
  margin: "auto",
  color: "white",
  padding: "23px 0 23px 0",
});

export const Wrapper = styled.div({
  display: "flex",
  background: "black",
  marginBottom: "0",
});

export const Line = styled.span({
  borderLeft: "1px solid lightgray",
  height: "35px",
  margin: "auto",
});

export const MiddlePart = styled.span({
  textAlign: "center",
  [`> div`]: {
    fontWeight: "100",
    margin: "auto 20px auto 20px",
    color: "lightgray",
    display: "flex",
  },
  [`> span`]: {
    margin: "auto 20px auto 20px",
    fontWeight: "700",
  },
});

export const LeftPart = styled.span({
  display: "block",
  float: "left",
  [`> span`]: {
    fontWeight: "700",
  },
  [`> div`]: {
    fontWeight: "100",
    color: "lightgray",
  },
});

export const Icons = styled.span({
  marginTop: "20px",
  width: "120px",
  [`> i`]: {
    marginLeft: "20%",
  },
});
