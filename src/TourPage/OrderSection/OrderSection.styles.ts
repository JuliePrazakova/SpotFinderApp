import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  justify-content: center;
  width: 80%;
  margin: auto;
  padding-bottom: 20px;
  color: black;
  font-family: Open Sans, sans-serif;
  border-radius: 30px;
  border: 1px solid gray;
  
  .box {
    display: flex;
    margin: auto auto 20px auto;
    border-radius: 30px 30px 0 0;
    border-bottom: 1px solid gray;
  }
  .box > div {
    width: 50%;
    margin: 0;
    padding: 10px;
  }
  .second-part {
    
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
  .name {
    margin-left: 10px;
    width: 50%;
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
  
`

export const Summary = styled.div`
  display: block;
  justify-content: center;
  width: 80%;
  margin: 30px auto 50px auto;
  color: black;
  background: rgba(228, 205, 190, 0.2);
  font-family: Open Sans, sans-serif;
  
  .summary-part {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    border-top: 1px solid lightgrey;
    padding: 40px 10px 40px 10px;
    
  }
  #totalPrice {
    float: right;
  }
  #summary {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    padding: 40px 10px 40px 10px;
  }
  .variable {
    width: 14%;
    text-align: right;
    font-size: 19px;
    font-weight: 600;
  }
  .label {
    font-size: 15px;
    font-weight: normal;
    color: gray;
    margin-top: 2px;
  }
  .vl {
    border: 0.5px solid gray;
    height: 20px;
  }
  .title {
    width: 14%;
    text-align: left;
    font-size: 19px;
    font-weight: 600;
  }
`

export const Button = styled.div`

    background: #E4CDBE;
    text-align: center;
    font-size: 18px;
    font-weight: 200;
    color: white;
    padding: 12px 30px 8px 30px;
    border-radius:  30px;
    width: 450px;
    margin: auto auto 50px auto;

    :hover {
    cursor: pointer;
}
`