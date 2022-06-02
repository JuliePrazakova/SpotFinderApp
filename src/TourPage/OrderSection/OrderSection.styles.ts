import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  justify-content: center;
  width: 80%;
  margin: auto;
  padding-bottom: 10px;
  color: black;
  background: white;
  font-family: Open Sans, sans-serif;
  border-radius: 30px;
  border: 1px solid gray;
  
  span {
    display: flex;
    margin: auto auto 20px auto;
    border-radius: 30px 30px 0 0;
    border-bottom: 1px solid gray;
  }
  span > div {
    width: 50%;
    margin: 0;
    padding: 10px;
  }
  
  .dropdown:hover, input:hover {
    cursor: pointer;
  }
  .dropdown:focus, input:focus{
  outline: 0;
  }
  .dropdown , input {
    width: 100%;
    padding: 2px 0 0 10px;
    font-size: 15px;
    font-weight: normal;
    border: none;
    color: gray;
    border-bottom: 1px solid lightgrey;
  }
  
  .left {
    border-radius: 30px 0 0 30px;
  }
  .right {
    border-radius:  0 30px 30px 0;
  }
  .label {
    padding: 14px;
    font-size: 18px;
    font-weight: 600;
    color: black;
    background: white;
    display: flex;
    margin: 10px;
  }
  .label > div {
    padding-right: 20px;
  }
  .vl {
    border-right: 1px solid gray;
  }
  .firstname {
    margin-right: 10px;
    width: 77%;
  }
  /* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
  @media screen and (max-width: 600px) {
    .dropdown:hover, input:hover {
      cursor: pointer;
    }
    .dropdown , input {
      padding: 8px;
      font-size: 16px;
    }
    
  }
  
`;

export const Summary = styled.div`
  display: block;
  justify-content: center;
  width: 80%;
  margin: 30px auto 50px auto;
  color: black;
  font-family: Open Sans, sans-serif;

  .button {
    background: #E4CDBE;
    text-align: center;
    font-size: 18px;
    font-weight: 200;
    color: white;
    padding: 12px 30px 8px 30px;
    border-radius:  30px;
    width: 70%;
    margin: auto;
  }
  .button:hover {
    cursor: pointer;
  }
  .summary-part {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }
`;