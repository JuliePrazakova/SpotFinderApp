import { Menu } from "semantic-ui-react";
import styled from "styled-components";

export const Button = styled.button({
  color: "#98475b",
  cursor: "pointer",
  background: "none",
  outline: "0",
  border: "none",
  textTransform: "none",
  textShadow: "none",
  lineHeight: "1em",
  fontStyle: "normal",
  textAlign: "center",
  textDecoration: "none",
});

export const Wrapper = styled.div({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  [`${Menu}`]: {
    height: "63vh",
  },
});

export const FlexBox = styled.div({
  display: "flex",
  width: "80%",
  margin: "auto",
});

export const ProfileSection = styled.div({
  float: "left",
  [` > img`]: {
    border: "3px solid white",
    marginTop: "-40px",
  },
});

export const RightSection = styled.div({
  width: "80%",
  margin: "auto",
});

export const Title = styled.div({
  fontSize: "20px",
  fontWeight: "400",
  fontFamily: "Montserrat",
});
