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
export const ContactSection = styled.div({
  width: "100%",
  background: "#f5f5f5",
  padding: "90px 90px",
  verticalAlign: "center",
});

export const ContactButton = styled.div({
  padding: "20px 50px 20px 50px",
  fontSize: "20px",
  border: "1px solid #98475b",
  borderRadius: "50px",
  [`> a`]: {
    color: "#98475b",
  },
});
