import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: Montserrat, serif;

  .background-cover {
    background: url("/images/adventures-background.png");
    background-size: cover;
    padding: 180px 0 13% 0;
    margin: 0;
    color: white;
  }
  .title > p {
    font-size: 60px;
    font-weight: 800;
  }
  .title {
    width: fit-content;
    margin: 0 0 30px 15%;
  }
  .middle-section {
    margin: auto;
    display: block;
    width: 80%;
  }
  .middle-section > div:first-of-type {
    width: fit-content;
    margin: auto;
    color: #98475b;
    font-size: 35px;
    padding: 80px;
    font-weight: 600;
  }
  .btn {
    border: 1px solid #98475b;
    border-radius: 50px;
    padding: 15px 30px 15px 30px;
    background: white;
  }
  .btn > a {
    color: #98475b;
  }
`;
export const Grid = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding-bottom: 140px;

  div {
    margin: auto;
    padding-top: 50px;
  }
`;

export const InstructionSection = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding: 90px 90px;
  vertical-align: center;

  .info-section {
    width: 60%;
    margin: auto;
    justify-content: space-between;
    display: block;
    color: #98475b;
  }
  .info-section > div:first-of-type {
    font-weight: 600;
    font-size: 45px;
    padding: 20px 0 40px 0;
  }
  .info-section > section {
    display: flex;
    padding: 20px 0 20px 0;
    font-size: 18px;
    font-weight: 300;
  }

  .number {
    border: 1px solid #98475b;
    width: 50px;
    padding: 14px 5 14px 0;
    vertical-align: middle;
    text-align: center;
    border-radius: 50%;
    font-size: 22px;
    font-weight: 400;
    margin-right: 10px;
  }

  .btn {
    padding: 20px 50px 20px 50px;
    font-size: 20px;
  }
`;
