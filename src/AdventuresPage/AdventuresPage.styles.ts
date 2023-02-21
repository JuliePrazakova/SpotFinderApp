import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: Montserrat, serif;

  .background-cover {
    background: url("/images/adventures-background.png");
    background-size: cover;
    background-position: center center;
    padding: 170px 0 20px 0;
    margin: 0;
    color: white;
  }
  .title {
    width: 30%;
    margin: 0 0 50px 14%;
  }
  .title > p {
    font-size: 57px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .title > div {
    font-size: 20px;
    font-weight: 200;
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
`;
export const Grid = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding-bottom: 140px;

  div {
    margin: auto;
  }
`;

export const InstructionSection = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding: 80px 0 20px 0;
  vertical-align: center;

  .info-section {
    width: 50%;
    margin: auto;
    justify-content: space-between;
    display: block;
    color: #98475b;
  }
  .info-section > div:first-of-type {
    font-weight: 600;
    font-size: 45px;
    padding: 20px 0 60px 0;
  }
  .info-section > section {
    display: flex;
    padding: 20px 0 60px 0;
  }
  .info-section > section > div {
    display: flex;
    width: 50%;
    font-size: 18px;
    font-weight: 300;
    margin-right: 50px;
  }
  .number {
    border: 1px solid #98475b;
    width: 50px;
    padding: 14px 0 14px 0;
    margin-top: -16px;
    vertical-align: middle;
    text-align: center;
    border-radius: 50%;
    font-size: 22px;
    font-weight: 400;
    margin-right: 10px;
  }
`;
