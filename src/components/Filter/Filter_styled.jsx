import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  color: gray;
  margin-bottom: 15px;
  margin-left: 30px;
`;

export const InputFilter = styled.input`
  width: 400px;
  padding: 10px 10px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 16px;

  &hover,
  &focus {
    border: 3px solid violet;
  }
`;
