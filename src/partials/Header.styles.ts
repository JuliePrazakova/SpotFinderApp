import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;

  .topNav {
    overflow: hidden;
    background-color: white;
    font-family: Open Sans, serif;
    vertical-align: middle;
  }

  .active {
    margin-left: 5%;
    margin-top: 5px;
  }
  .active > img {
    width: 100px;
    height: auto;
  }

  /* Style the links inside the navigation bar */
  .topNav a {
    float: left;
    display: block;
    text-align: center;
    font-weight: 100;
    color: #98475b;
    text-decoration: none;
  }

  .header-right {
    float: right;
    height: 65px;
    display: flex;
  }

  .header-right > div,
  i {
    display: flex;
    height: 20px;
    margin: 23px 10px 0 10px;
    color: #98475b;
  }

  /* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
  @media screen and (max-width: 600px) {
    .header-right a {
      float: none;
      display: block;
      text-align: left;
      width: 100%;
      margin: 0;
      padding: 14px;
    }
  }
`;
