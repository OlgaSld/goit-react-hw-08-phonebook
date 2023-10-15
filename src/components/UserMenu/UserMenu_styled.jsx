import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Username = styled.p`
  font-weight: 700;
  color: gray;
  font-size: 30px;
  margin-right: 30px;
`;

export const Button = styled.button`
  margin-right: 30px;
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
