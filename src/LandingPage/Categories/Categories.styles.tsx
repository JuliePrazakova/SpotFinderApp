import styled from "styled-components";

export const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 420px;
  border: 1px solid #98475b;
  border-radius: 50px;
  padding: 60px;
  margin: 50px auto auto;
  color: #98475b;
  font-size: 15px;
  font-weight: 300;
  justify-content: space-between;

  div > div:first-of-type {
    padding-top: 30px;
  }
  .width {
    width: fit-content;
  }
`;
