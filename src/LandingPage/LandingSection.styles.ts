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
  .lower-section {
    margin: auto;
    padding-top: 50px;
    display: flex;
    width: 80%;
    justify-content: space-between;
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
  width: 50%;
  display: flex;
  flex-wrap: wrap;
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
  }
`;
