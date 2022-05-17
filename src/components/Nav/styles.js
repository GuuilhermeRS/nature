import styled from 'styled-components';

import { colors } from '../../assets/styles/default';

export const Navbar = styled.nav`
  display: flex;

  a {
    margin: 0 16px;
    text-decoration: none;
    color: #000;
    font-size: 16px;

    &:hover {
      color: ${colors.primary.dark};
    }
  }

  .active {
    color: ${colors.primary.light};
  }
`;
