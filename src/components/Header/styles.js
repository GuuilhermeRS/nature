import styled from 'styled-components';
import { colors } from '../../assets/styles/default';

export const Container = styled.header`
  height: 152px;
  padding: 0 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    a.button{
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;

      padding: 10px 40px;
      border-radius: 24px;
      background: ${colors.primary.main};

      &:hover {
        background: ${colors.primary.dark};
        transition: background 0.2s;
      }
    }
  }
`;
