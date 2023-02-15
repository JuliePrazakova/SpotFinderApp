import styled from 'styled-components'

export const Buttons = styled.div`
  display: flex;
  margin-left: 20%;
  
  .type-button {
    font-size: 14px;
    border-radius: 13px 13px 0 0;
    background: rgba(16,16,16,0.4);
    margin: 0 3px 0 3px;
    padding: 10px 20px 6px 20px;
  }
  .active {
    background: rgba(16,16,16,0.7);
  }

`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin-left: 15%;
  color: black;
  background: white;
  font-family: Open Sans, sans-serif;
  border-radius: 30px;
  box-shadow: 0 2px 10px #333333;
  
  .dropdown:hover, input:hover, .button:hover {
    cursor: pointer;
  }
  .dropdown:focus, input:focus{
  outline: 0;
  }
  .dropdown , input, .button {
    padding: 2px 0 0 10px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    color: gray;
  }
  .button {
    background: gray;
    font-size: 18px;
    font-weight: 200;
    color: white;
    padding: 15px 30px 0 30px;
    border-radius: 0 30px 30px 0;
  }
  .left {
    border-radius: 30px 0 0 30px;
    margin-left: 15px;
  }
  .label {
    padding: 14px;
    font-size: 18px;
    font-weight: 600;
    color: black;
    background: white;
    display: flex;
  }
  .vl {
    border-left: 1px solid gray;
    height: 30px;
    margin: auto;
  }
  
  /* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
  @media screen and (max-width: 600px) {
    .dropdown:hover, input:hover, .button:hover {
      cursor: pointer;
    }
    .dropdown , input, .button {
      padding: 8px;
      font-size: 16px;
    }
    
  }
  
`
