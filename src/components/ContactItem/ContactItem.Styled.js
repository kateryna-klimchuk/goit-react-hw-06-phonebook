import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid grey;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px rgb(196, 179, 179);
  font-size: 20px;
  background-color: rgb(249, 248, 247);

  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  padding: 2px 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: rgb(78, 111, 111);
  background-color: rgb(201, 197, 197);
  transition: background-color 250ms linear, color 250ms linear;

  &:hover {
    background-color: rgb(118, 125, 123);
    color: rgb(219, 212, 212);
  }
`;
