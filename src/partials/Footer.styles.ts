import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: #404040;
  margin-bottom: 0;

  .footer {
    display: flex;
    justify-content: space-around;
    position: relative;
    font-family: "Open Sans", serif;
    width: 40%;
    margin: auto;
    color: white;
    text-align: center;
  }
  .footer > div {
    display: flex;
    padding: 23px 0 23px 0;
  }
  .vl {
    border-left: 1px solid lightgray;
    height: 35px;
    margin: auto;
  }
  .information > div {
    font-weight: 100;
    margin: auto 20px auto 20px;
    color: lightgray;
  }
  .contact {
    margin: auto 20px auto 20px;
    font-weight: 600;
  }
`;
