import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 0;
  font-family: Open Sans,serif;
  
  .text-box{
    padding: 0 20px 20px 20px;
    display: block;
  }
  div {
    display: flex;
    font-size: 17px;
    font-weight: 200;
    padding: 10px 0 10px 0;
    margin: 0;
  }
  .address, .address >div >div  {
    display: flex;
  }
  .address > div {
    display: block;
    margin: 0;
    padding: 0;
    
  }
  .address > div > div {
    margin: 0;
    padding: 0;
  }
  .first-child {
    margin-top: 30px;
  }
  .title {
    width: 100%;
    font-size: 40px;
    font-weight: 700;
    margin-left: 0;
  }
  
`;
export const PriceTag = styled.div`
  padding: 20px 0 40px 0;
  font-size: 25px;
  font-weight: 300;
  border-bottom: 1px solid gray;
  margin: 0 40px 20px 20px;
`;
export const Description = styled.div`
  padding: 0 0 50px 0;
  font-size: 17px;
  font-weight: 200;
  margin: 0 40px 50px 20px;
`;
export const Box = styled.div`
  display: block;
  width: 50%;
`;

