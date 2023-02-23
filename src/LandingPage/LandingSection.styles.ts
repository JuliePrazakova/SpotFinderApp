import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: Montserrat, serif;

  .background-cover {
    background: url("/images/mainBackground.png");
    background-size: cover;
    padding: 320px 0 16% 0;
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
`;
export const Grid = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding-bottom: 140px;

  > div {
    margin: auto;
  }
`;

export const ContactSection = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding: 90px 90px;
  vertical-align: center;

  .help-section {
    width: 70%;
    margin: auto;
    justify-content: space-between;
    display: flex;
  }
  .help-section > div:first-of-type {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 29px;
    font-weight: 300;
  }
  .btn {
    padding: 20px 50px 20px 50px;
    font-size: 20px;
    border: 1px solid #98475b;
    border-radius: 50px;
  }
  .btn > a {
    color: #98475b;
  }
`;
