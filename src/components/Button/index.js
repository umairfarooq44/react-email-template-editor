import styled from 'styled-components';

export default styled.button`
  display: inline-block;
  padding: 0.5em 3em;
  border: 0.16em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  transition: all 0.15s;
  &:hover {
    color: #bbbbbb;
    border-color: #bbbbbb;
  }
  &:active {
    color: #bbbbbb;
    border-color: #bbbbbb;
  }
`;
