import styled from "styled-components";

export const Button = styled.button({
  background: "#98475b",
  color: "white",
  fontWeight: "100",
  fontFamily: "Montserrat",
  cursor: "pointer",
  display: "inline-block",
  minHeight: "1em",
  outline: "0",
  border: "none",
  verticalAlign: "baseline",
  margin: "auto 0 0 0",
  padding: "0.78571429em 1.5em 0.78571429em",
  textTransform: "none",
  textShadow: "none",
  lineHeight: "1em",
  fontStyle: "normal",
  textAlign: "center",
  textDecoration: "none",
  borderRadius: "0.28571429rem",
  boxShadow: "0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset",
  userSelect: "none",
  [`> a`]: {
    color: "white",
  },
});
