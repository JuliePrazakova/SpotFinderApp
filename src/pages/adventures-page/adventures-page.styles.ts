import styled from "styled-components";

export const Box = styled.div({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  margin: "auto",
  fontFamily: "Montserrat, serif",
  [`> img`]: {
    width: "300px",
    height: "200px",
    objectFit: "cover",
  },
});

export const BackgroundCover = styled.div({
  background: "url('/images/adventures-background.png')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  padding: "170px 0 20px 0",
  margin: "0",
  color: "white",
});

export const Title = styled.div({
  width: "30%",
  margin: "0 0 50px 14%",
  display: "inline-block",

  [`> div`]: {
    fontSize: "20px",
    fontWeight: "200",
  },
  [`> p`]: {
    fontSize: "57px",
    fontWeight: "700",
    marginBottom: "5px",
  },
});

export const MiddleSection = styled.div({
  margin: "auto",
  display: "block",
  width: "80%",
});

export const TopBar = styled.div({
  width: "70%",
  justifyContent: "space-between",
  margin: "auto",
  display: "flex",
  padding: "80px 0 0 0",
  [`> p`]: {
    width: "fit-content",
    color: "#98475b",
    fontSize: "35px",
    fontWeight: "600",
  },
});

export const InstructionSection = styled.div({
  width: "100%",
  background: "#e6e6e6",
  padding: "80px 0 20px 0",
  verticalAlign: "center",
});

export const InstructionBox = styled.div({
  width: "50%",
  margin: "auto",
  justifyContent: "space-between",
  display: "block",
  color: "#98475b",
  [`> div:first-of-type`]: {
    fontWeight: "600",
    fontSize: "45px",
    padding: "20px 0 60px 0",
  },
});

export const Line = styled.section({
  display: "flex",
  padding: "20px 0 60px 0",
  [`> div`]: {
    display: "flex",
    width: "50%",
    fontSize: "18px",
    fontWeight: "300",
    marginRight: "50px",
  },
});

export const Number = styled.section({
  border: "1px solid #98475b",
  width: "50px",
  padding: "14px 0 14px 0",
  marginTop: "-16px",
  verticalAlign: "middle",
  textAlign: "center",
  borderRadius: "50%",
  fontSize: "22px",
  fontWeight: "400",
  marginRight: "10px",
});

export const Grid = styled.div({
  width: "70%",
  margin: "auto",
});

export const Tour = styled.div({
  display: "flex",
  justifyContent: "space-between",
  margin: "60px 0 60px 0",
});

export const TourBox = styled.div({
  display: "flex",
});

export const TextBox = styled.div({
  padding: "25px 0px 0px 25px",
  [`> p`]: {
    fontSize: "16px",
  },
  [`> p:last-of-type`]: {
    fontWeight: "600",
  },
});

export const Search = styled.div({
  display: "flex",
  background: "white",
  color: "gray",
  pagging: "100px",
  height: "30px",
  width: "200px",
  justifyContent: "space-between",
  marginRight: "0",
  border: "1px solid lightgray",
  borderRadius: "15px",
  [`> div `]: {
    margin: "auto",
    [`> input`]: {
      border: "none",
      borderRadius: "15px",
      height: "28px",
      width: "100%",
    },
    [`> input:active`]: {
      outline: "0",
      border: "none",
    },
    [`> input:focus`]: {
      outline: "0",
      border: "none",
    },
    [`> input:hover`]: {
      outline: "0",
      border: "none",
    },
  },
});

export const Img = styled.div({
  width: "300px",
  height: "100%",
  [`> img `]: {
    width: "300px",
    height: "200px",
    objectFit: "cover",
  },
});
