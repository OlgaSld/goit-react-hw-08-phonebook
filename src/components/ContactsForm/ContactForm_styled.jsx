import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
  padding: 0 15px;
  margin-left: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  color: gray;
  margin-bottom: 15px;
`;

export const StyledField = styled(Field)`
  padding: 10px 10px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 16px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 16px;
  color: red;
`;

export const Button = styled.button`
  display: block;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  border: 2px solid violet;
  background-color: white;
  color: gray;
  font-size: 20px;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1);
    background-color: violet;
    color: gray;
  }
`;
