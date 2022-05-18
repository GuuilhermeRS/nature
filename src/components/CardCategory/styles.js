import styled from 'styled-components';
import { colors } from '../../assets/styles/default';

export const Container = styled.div`
  width: 400px;
  height: 520px;
  background: #D93B30;
  border-radius: 20px;

  h4 {
    font-weight: 600;
    font-size: 32px;
    color: #fff;
    margin: 56px 0 0 48px;

    &:hover {
      color: ${colors.primary.dark};
      cursor: pointer;
    }
  }
`;
