import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  margin-left: 20%;

  .type-button {
    font-size: 14px;
    border-radius: 13px 13px 0 0;
    background: rgba(16, 16, 16, 0.4);
    margin: 0 3px 0 3px;
    padding: 10px 20px 6px 20px;
  }
  .active {
    background: rgba(16, 16, 16, 0.7);
  }
  button {
    background: none;
    border: none;
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-left: 15%;
  color: black;
  background: white;
  font-family: Open Sans, sans-serif;
  border-radius: 80px;
  box-shadow: 0 2px 8px #333333;

  .dropdown:hover,
  input:hover,
  .button:hover {
    cursor: pointer;
  }
  .dropdown:focus,
  input:focus {
    outline: 0;
  }
  .dropdown,
  input,
  .button {
    padding: 0 0 0 10px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    color: gray;
  }
  .search-button {
    background: #98475b;
    width: 150px;
    font-size: 18px;
    font-weight: 300;
    color: white;
    padding: 24px;
    border-radius: 0 80px 80px 0;
  }
  .search-button > div {
    margin: auto;
    width: fit-content;
  }
  .left {
    border-radius: 80px 0 0 80px;
    margin-left: 15px;
  }
  .label {
    padding: 24px;
    font-size: 12px;
    color: black;
    background: white;
    display: flex;
  }
  .vl {
    border-left: 1px solid gray;
    height: 40px;
    margin: auto;
  }

  /* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
  @media screen and (max-width: 600px) {
    .dropdown:hover,
    input:hover,
    .button:hover {
      cursor: pointer;
    }
    .dropdown,
    input,
    .button {
      padding: 8px;
      font-size: 16px;
    }
  }
`;
