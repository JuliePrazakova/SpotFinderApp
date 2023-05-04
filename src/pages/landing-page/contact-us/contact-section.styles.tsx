import styled from "styled-components";

export const ContactSection = styled.div({
  width: "100%",
  background: "#D8D8D8",
  padding: "90px 90px",
  verticalAlign: "center",
});

export const ContactButton = styled.div({
  padding: "20px 50px 20px 50px",
  fontSize: "20px",
  border: "1px solid #98475b",
  borderRadius: "50px",
  [`> button`]: {
    color: "#98475b",
    textDecoration: "none",
    border: "none",
    background: "none",
  },
});

export const Box = styled.div({
  width: "70%",
  margin: "auto",
  justifyContent: "space-between",
  display: "flex",
  [`> div:first-of-type`]: {
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: "29px",
    fontWeight: "300",
  },
});
