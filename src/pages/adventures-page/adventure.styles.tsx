import styled from "styled-components";
import { Button } from "../../App.styles";

export const MiddleSection = styled.div({
  margin: "auto",
  display: "flex",
  width: "80%",
});

export const OrderForm = styled.div({
  border: "1px solid black",
  margin: "auto",
  padding: "50px",
  width: "fit-content",
  [`${Button}`]: {
    width: "100%",
    marginTop: "20px",
  },
});

export const Field = styled.div({
  width: "50%",
  border: "1px solid lightgray",
  borderRadius: "5px",
  height: "40px",
  marginTop: "22px",
});

export const Subtitle = styled.div({
  fontSize: "25px",
  padding: "25px",
  width: "100%",
  margin: "auto",
});

export const Title = styled.div({
  width: "fit-content",
  display: "inline-block",
  fontSize: "30px",
});

export const Address = styled.div({
  fontSize: "14px",
  margin: "10px 0 25px 0",
  fontWeight: "300",
});

export const ShortDescription = styled.div({
  fontSize: "17px",
  lineHeight: "20px",
  margin: "10px 0 25px 0",
});

export const LongDescription = styled.div({
  fontSize: "17px",
  lineHeight: "20px",
});

export const LeftSide = styled.div({
  width: "30%",
  padding: "30px",
  marginTop: "140px",
  float: "left",
});

export const RightSide = styled.div({
  width: "70%",
  padding: "130px 100px 100px 100px",
  display: "flex",
});

export const TopSection = styled.div({
  display: "flex",
  width: "80%",
  margin: "auto auto 100px auto",
  borderBottom: "1px solid black",
});

export const LeftBox = styled.div({
  margin: "auto",
  display: "block",
  width: "50%",
});

export const MainImg = styled.div({
  margin: "auto",
  width: "100%",
  height: "100%",
  [` > img`]: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
});

export const SideImgs = styled.div({
  display: "block",
  width: "50%",
  [` > img`]: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "48%",
  },
  [` > img:first-of-type`]: {
    margin: "0 0 2% 4%",
  },
  [` > img:last-of-type`]: {
    margin: "2%  0 0 4%",
  },
});

export const Grid = styled.div({
  width: "100%",
  margin: "auto",
});
