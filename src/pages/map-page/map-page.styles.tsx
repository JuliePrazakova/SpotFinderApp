import styled from "styled-components";
import { Button } from "../../App.styles";

export const Box = styled.div({});

export const Section = styled.div({
  display: "flex",
});

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "93vh",
  justifyContent: "space-between",
  margin: "0px auto auto auto",
  width: "25%",
});

export const Flex = styled.div({
  display: "flex",
});

export const Subtitle = styled.div({
  fontSize: "18px",
  margin: "auto",
  width: "fit-content",
  paddingTop: "19px",
  marginTop: "0px",
});

export const Title = styled.div({
  width: "fit-content",
  display: "inline-block",
  fontSize: "23px",
});

export const Address = styled.div({
  fontSize: "12px",
  margin: "10px 0 25px 0",
  fontWeight: "300",
});

export const ShortDescription = styled.div({
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "100",
  margin: "10px 0 25px 0",
});

export const Grid = styled.div({
  width: "100%",
  margin: "0px auto auto -15px",
});

export const MainImg = styled.div({
  marginTop: "0px",
  [` > img`]: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

export const TopSection = styled.div({
  width: "80%",
  margin: "25px auto 0px auto",
  borderBottom: "1px solid black",
});

export const LowerSection = styled.div({
  width: "80%",
  margin: "auto",
  marginTop: "0px",
});

export const MiniTour = styled.div({
  [` > img`]: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
  margin: "auto",
});

export const TourTitle = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "800",
});

export const ButtonSection = styled.div({
  width: "80%",
  margin: "auto auto 10px auto",
  [`${Button}`]: {
    width: "100%",
    marginTop: "20px",
  },
});
