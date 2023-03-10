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

export const SearchBar = styled.div({
  display: "flex",
  width: "50%",
  marginLeft: "15%",
  color: "black",
  background: "white",
  fontFamily: "Open Sans, sans-serif",
  borderRadius: "80px",
  boxShadow: "0 2px 8px #333333",
});

export const SearchBarMini = styled.div({
  display: "flex",
  width: "350px",
  height: "40px",
  margin: "auto",
  color: "black",
  marginTop: "12px",
  fontWeight: "500",
  background: "white",
  textAlign: "center",
  fontFamily: "Open Sans, sans-serif",
  borderRadius: "80px",
  border: "1px solid lightgray",
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
    [`> button`]: {
      background: "none",
      border: "none",
    },
  },
});

export const Line = styled.div({
  borderLeft: "1px solid gray",
  height: "40px",
  margin: "auto",
});

export const LineMini = styled.div({
  borderLeft: "1px solid lightgray",
  height: "20px",
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

export const RoadTripBarSection = styled.form({
  display: "flex",
  width: "100%",
  [`> div:first-of-type`]: {
    borderRadius: "80px 0 0 80px",
    marginLeft: "15px",
  },
});

export const OneWayBarSection = styled.form({
  display: "flex",
  width: "100%",
  [`> div:first-of-type`]: {
    borderRadius: "80px 0 0 80px",
    marginLeft: "15px",
  },
});

export const SearchIcon = styled.form({
  width: "fit-content",
  padding: "10px",
});

export const RoadTripBarSectionMini = styled.form({
  display: "flex",
  width: "100%",
  margin: "auto",
  [`> div:first-of-type`]: {
    borderRadius: "80px 0 0 80px",
    marginLeft: "15px",
    width: "30%",
  },
  [`> div:div:nth-child(2)`]: {
    width: "30%",
    background: "red",
  },
});

export const OneWayBarSectionMini = styled.form({
  display: "flex",
  width: "100%",
  margin: "auto",
  [`> div:first-of-type`]: {
    borderRadius: "80px 0 0 80px",
    marginLeft: "15px",
    width: "45%",
  },
  [`> div:last-of-type`]: {
    width: "45%",
  },
});
