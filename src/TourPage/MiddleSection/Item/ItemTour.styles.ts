import styled from 'styled-components';

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  display: flex;
  flex-direction: column;
  width: 310px;
  background: white;
  border-radius: 20px;
  height: 100%;
  padding: 15px 40px 40px 40px;
  margin: auto 20px auto 20px;

  .title {
    font-size: 25px;
    font-weight: 700;
    width: 100%;
  }
  .description {
    margin: 20px auto 20px auto;
    font-weight: 100;
  }
  .included {
    font-weight: 100;
    font-size: 13px;
    margin: 8px auto 10px 20px;
  }
  .tag {
    font-size: 22px;
    margin-top: 20px;
  }
  
`;
