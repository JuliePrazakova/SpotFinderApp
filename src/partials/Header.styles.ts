import styled from "styled-components";

export const Navigation = styled.div({
  width: "80%",
  margin: "auto",
  overflow: "hidden",
  backgroundColor: "white",
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

  [`> div, i`]: {
    color: "#98475b",
    height: "20px",
    margin: "23px 10px 0 10px",
    cursor: "pointer",
    textDecoration: "none",
    [`> a`]: {
      color: "#98475b",
    },
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
