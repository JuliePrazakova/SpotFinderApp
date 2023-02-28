import styled from "styled-components";

export const CategorySection = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "420px",
  height: "420px",
  border: "1px solid #98475b",
  borderRadius: "50px",
  padding: "60px",
  margin: "50px auto auto",
  color: "#98475b",
  fontSize: "15px",
  fontWeight: "300",
  justifyContent: "space-between",
  [`> div:last-of-type`]: {
    width: "fit-content",
  },
});

export const Text = styled.div({
  paddingTop: "30px",
});
