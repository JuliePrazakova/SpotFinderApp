import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  border-radius: 20px;
  height: 100%;
  margin-right: 20px;

  img {
    width: 300px;
    height: 200px ;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  .text-box {
    font-family: Open Sans, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  .text-box > p {
    font-size: 15px;
    font-weight: 200;
    margin:0;
  }
  .text-box > h3 {
    margin: 8px 0 8px 0;
  }
`;
