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
});

export const ModalContainer = styled.div({
  width: "65%",
  margin: "auto",
  marginTop: "5%",
  background: "white",
  borderRadius: "5px",
  paddingBottom: "50px",
});

export const ModalBody = styled.div({
  width: "100%",
  margin: "auto",
});

export const ModalTitle = styled.div({
  fontSize: "23px",
  padding: "50px",
});

export const Order = styled.div({
  width: "60%",
  display: "flex",
  flexDirection: "column",
  margin: "40px auto 40px auto",
  color: "gray",
  border: "1px solid #98475b",
  padding: "50px",

  [`${Button}`]: {
    width: "200px",
    margin: "10px auto 30px auto",
  },
});

export const Group = styled.div({
  display: "flex",
  margin: "4px auto 4px auto",
  width: "100%",
  justifyContent: "space-between",

  [`${Button}`]: {
    width: "200px",
    margin: "20px auto 20px auto",
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
