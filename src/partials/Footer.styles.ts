import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  background: black;
  margin-bottom: 0;

  .footer {
    display: flex;
    justify-content: space-around;
    position: relative;
    font-family: "Open Sans", serif;
    width: 80%;
    margin: auto;
    color: white;
    
  }
  .footer > div {
    padding: 23px 0 23px 0;
  }
  .vl {
    border-left: 1px solid lightgray;
    height: 35px;
    margin: auto;
  }
  .information {
    text-align: center;
  }
  .information > div {
    font-weight: 100;
    margin: auto 20px auto 20px;
    color: lightgray;
    display: flex;
  }
  .left-part {
    display: block;
    float: left;
  }
  .left-part > span {
    font-weight: 700;
  }
  .left-part > div {
    font-weight: 100;
    color: lightgray;
  }
  .contact {
    margin: auto 20px auto 20px;
    font-weight: 700;
  }
  .icons {
    margin-top: 20px;
    width: 120px;
  }
  .icons > i {
    margin-left: 20%;
  }
`
