import styled from 'styled-components';

export const Form = styled.form`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px 30px;
  font-size: 20px;
  background-color: rgb(249, 248, 247);
`;

export const Input = styled.input`
  padding: 12px;
  outline: none;
  border: 1px solid rgb(128, 121, 121);
  border-radius: 5px;
`;

export const Label = styled.label`
  margin: 0;
  font-size: 20px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: rgb(78, 111, 111);
  background-color: rgb(201, 197, 197);
  transition: background-color 250ms linear, color 250ms linear;

  &:hover {
    background-color: rgb(118, 125, 123);
    color: rgb(219, 212, 212);
  }
`;
