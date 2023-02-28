import styled from "styled-components";

export const Buttons = styled.div({
  display: "flex",
  marginLeft: "20%",
  [`.active`]: {
    background: "rgba(16, 16, 16, 0.7)",
  },
});

export const TypeButton = styled.div({
  fontSize: "14px",
  borderRadius: "13px 13px 0 0",
  background: "rgba(16, 16, 16, 0.4)",
  margin: "0 3px 0 3px",
  padding: "10px 20px 6px 20px",
  [`> button`]: {
    background: "none",
    border: "none",
    textDecoration: "none",
  },
});

export const SearchBar = styled.form({
  display: "flex",
  width: "50%",
  marginLeft: "15%",
  color: "black",
  background: "white",
  fontFamily: "Open Sans, sans-serif",
  borderRadius: "80px",
  boxShadow: "0 2px 8px #333333",
});

export const SearchButton = styled.div({
  background: "#98475b",
  width: "150px",
  fontSize: "18px",
  fontWeight: "300",
  color: "white",
  padding: "24px",
  borderRadius: "0 80px 80px 0",
  [`> div`]: {
    margin: "auto",
    width: "fit-content",
  },
});

export const Line = styled.div({
  borderLeft: "1px solid gray",
  height: "40px",
  margin: "auto",
});

export const Label = styled.div({
  padding: "24px",
  fontSize: "12px",
  color: "black",
  background: "white",
  display: "flex",
  [`> input`]: {
    padding: "0 0 0 10px",
    fontSize: "12px",
    fontWeight: "normal",
    border: "none",
    color: "gray",
  },
  [`> input:focus`]: {
    outline: "0",
  },
  [`> input:hover`]: {
    cursor: "pointer",
  },
});

export const RoadTripBarSection = styled.div({
  display: "flex",
  width: "100%",
  [`> div:first-of-type`]: {
    borderRadius: "80px 0 0 80px",
    marginLeft: "15px",
  },
});

export const OneWayBarSection = styled.div({
  display: "flex",
  width: "100%",
  [`> div:first-of-type`]: {
    borderRadius: "80px 0 0 80px",
    marginLeft: "15px",
  },
});
