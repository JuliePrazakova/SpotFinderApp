import styled from "styled-components";

export const BackgroundCover = styled.div({
  background: "url('/images/mainBackground.png')",
  backgroundSize: "cover",
  padding: "320px 0 16% 0",
  margin: "0",
  color: "white",
});

export const Title = styled.div({
  width: "fit-content",
  margin: "0 0 30px 15%",
  [`> p`]: {
    fontSize: "60px",
    fontWeight: "800",
  },
});

export const MiddleSection = styled.div({
  margin: "auto",
  display: "block",
  width: "80%",
  [`> div:first-of-type`]: {
    width: "fit-content",
    margin: "auto",
    color: "#98475b",
    fontSize: "35px",
    padding: "80px",
    fontWeight: "600",
  },
});

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  fontFamily: "Montserrat, serif",
  background: "#F6F6F6",
});

export const Grid = styled.div({
  width: "70%",
  display: "flex",
  flexWrap: "wrap",
  margin: "auto",
  paddingBottom: "140px",
  [`> div`]: {
    margin: "auto",
  },
});
