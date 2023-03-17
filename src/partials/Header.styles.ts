import styled from "styled-components";

export const Navigation = styled.div({
  width: "80%",
  display: "flex",
  margin: "auto",
  overflow: "hidden",
  backgroundColor: "white",
  justifyContent: "space-between",
  fontFamily: "Open Sans, serif",
  verticalAlign: "middle",
  [`> a`]: {
    float: "left",
    display: "block",
    textAlign: "center",
    fontWeight: "100",
    color: "#98475b",
    textDecoration: "none",
  },
});

export const RightSection = styled.div({
  float: "right",
  height: "65px",
  display: "flex",
  marginRight: "0px",
  [`> div, i`]: {
    color: "#98475b",
    height: "20px",
    margin: "23px 10px 0 10px",
    cursor: "pointer",
    textDecoration: "none",
    [`> a, button`]: {
      color: "#98475b",
      border: "none",
      background: "none",
    },
  },
  [`> button`]: {
    background: "none",
    border: "none",
    width: "fit-content",
    height: "fit-content",
  },
});

export const Logo = styled.a({
  marginLeft: "5%",
  marginTop: "5px",
  [`> img`]: {
    width: "100px",
    height: "auto",
  },
});
