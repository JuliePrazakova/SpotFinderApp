import styled from "styled-components";

export const Button = styled.div`
  background: #98475b;
  color: white;
  font-weight: 100;

  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
  -webkit-user-select: none;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;

  a {
    color: white;
    text-decoration: none;
  }
`;
