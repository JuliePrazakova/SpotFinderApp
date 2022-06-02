import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  background: url("/images/background-question-box.jpg");
  margin: 50px auto 50px auto;
  font-family: Open Sans,serif ;
  padding-bottom: 30px;
  
  .title {
    width: fit-content;
    margin-left: 10%;
    font-size: 35px;
    font-weight: 800;
    color: white;
    padding: 70px 0 10px 0;
  }
  //whole box without title
  .form-box {
    display: flex;
    width: 80%;
    margin: auto;
    padding-bottom: 20px;
  }
  //divs with labels
  .label {
    padding: 6px 6px 6px 19px;
    font-size: 14px;
    font-weight: 600;
    color: black;
    background: white;
    display: flex;
    border-radius: 20px;
    margin: 20px 20px 0 0;
  }
  //black vertical line in first input
  .vl {
    border-left: 1px solid gray;
    height: 15px;
    margin: auto;
  }
 
  //all iputs
  .input {
    padding: 1px 0 0 10px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    color: gray;
  }
  .input:hover, .submit-btn:hover {
    cursor: pointer;
  }
  .submit-btn:focus, .input:focus{
    outline: 0;
  }
  //message box
  .msg {
    flex-direction: column;
    width: 100%;
    margin-right: 0;
  }
  .msg > input {
    width: content-box;
    height: 100%;
    word-break: break-word;
  }
  //submit button
  .submit-btn {
    float: right;
    width: fit-content;
    background: gray;
    font-size: 18px;
    font-weight: 200;
    color: white;
    padding: 6px 55px 6px 55px;
    margin-right: 10%;
    border-radius: 30px;
    border: 1px solid lightgray;
  }
  .left-part {
    width: 50%;
  }
  
`;