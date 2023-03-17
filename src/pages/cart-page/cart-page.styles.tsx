import styled from "styled-components";
import { Button } from "../../App.styles";

export const ModalOverlay = styled.div({
  display: "block",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "9999",
  overflowY: "scroll",
});

export const ModalContainer = styled.div({
  width: "50%",
  margin: "3% auto 3% auto",
  background: "white",
  borderRadius: "5px",
  paddingBottom: "20px",
});

export const ModalBody = styled.div({
  width: "80%",
  margin: "auto",
  paddingBottom: "20px",
});

export const ModalTitle = styled.div({
  fontSize: "23px",
  marginLeft: "10%",
  fontWeight: "400",
  padding: "60px 50px 20px 0",
});

export const Order = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  margin: "40px auto 0 auto",
  color: "gray",
  border: "1px solid #98475b",
  padding: "30px",

  [`${Button}`]: {
    width: "200px",
    margin: "10px auto 20px auto",
  },
});

export const Group = styled.div({
  display: "flex",
  margin: "4px auto 4px auto",
  width: "100%",
  justifyContent: "space-between",

  [`${Button}`]: {
    width: "200px",
    margin: "20px auto 0 auto",
  },
});

export const SubTitle = styled.div({
  fontWeight: "700",
  color: "black",
  margin: "15px auto 15px auto",
  fontSize: "16px",
});

export const Input = styled.input({
  width: "50%",
  margin: "8px",
  border: "1px solid gray",
  padding: "10px",
  fontWeight: "200",
  fontSize: "12px",
  fontFamily: "Montserrat",
  ":active": {
    borderColor: "gray !important",
  },
});

export const Textarea = styled.textarea({
  width: "100%",
  margin: "8px",
  height: "80px",
  border: "1px solid gray",
  padding: "10px",
  fontWeight: "200",
  fontSize: "12px",
  fontFamily: "Montserrat",
  ":active": {
    borderColor: "gray !important",
  },
});

export const ModalHeader = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  marginBottom: "20px",
});

export const ModalCloseButton = styled.button({
  border: "none",
  background: "none",
  cursor: "pointer",
  height: "fit-content",
  margin: "10px 2px",
});

export const MiniTour = styled.div({
  display: "flex",
  margin: "auto",
  justifyContent: "space-around",
});

export const Image = styled.div({
  width: "150px",
  height: "fit-content",
  [` > img`]: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "170px",
    height: "100%",
  },
});

export const TextBox = styled.div({
  margin: "auto",
  marginLeft: "50px",
  [`> p`]: {
    fontSize: "16px",
  },
  [`> p:last-of-type`]: {
    fontWeight: "600",
  },
});

export const PriceBox = styled.div({
  display: "flex",
  alignSelf: "flex-end",
  fontWeight: "700",
  marginBottom: "11px",
});

export const TourName = styled.div({
  display: "flex",
  fontWeight: "300",
});

export const CompanyTitle = styled.div({
  display: "flex",
  fontSize: "17px",
  fontWeight: "800",
});

export const TotalPrice = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "700",
  margin: "auto",
});
