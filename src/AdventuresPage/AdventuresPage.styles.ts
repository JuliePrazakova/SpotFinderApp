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
    width: 70%;
    justify-content: space-between;
    margin: auto;
    display: flex;
    padding: 80px 0 0 0;
  }
  .middle-section > div:first-of-type > p {
    width: fit-content;
    color: #98475b;
    font-size: 35px;
    font-weight: 600;
  }
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;
export const Grid = styled.div`
  width: 70%;
  flex-wrap: wrap;
  margin: auto;
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
export const Tour = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 60px 0;
  > div {
    display: flex;
  }
  .text-box {
    padding: 25px 0px 0px 25px;
  }
  .text-box > p {
    font-size: 16px;
  }
  .text-box > p:last-of-type {
    font-weight: 600;
  }
  .list {
    font-size: 13px;
  }
`;
