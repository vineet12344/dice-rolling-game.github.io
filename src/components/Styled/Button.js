import styled from "styled-components";



export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: background ease-in 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    border: 1px solid black;
    color: black;
    transition: background ease-in 0.4s;
  }
`;

export const OutlineButton = styled(Button)`

background: white;
border: 1px solid black;
color: black;


&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: background ease-in 0.4s;
  }
`;