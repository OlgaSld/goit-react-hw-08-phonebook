import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 30px;
  color: gray;
  margin-left: 30px;

  &.active {
    color: violet;
  }
`;
