import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin-left: 20px;
  margin-top: 40px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 500;
  color: gray;
`;

export const Input = styled.input`
  height: 40px;
  width: 350px;
  border: 2px solid gray;
  border-radius: 5px;
  font-size: 20px;
  outline: none;

  &:hover,
  &:focus {
    border-color: violet;
  }
`;

export const Button = styled.button`
  margin-top: 16px;
  border: 2px solid violet;
  background-color: white;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px;

  &:hover,
  &:focus {
    background-color: violet;
    color: gray;
  }
`;
