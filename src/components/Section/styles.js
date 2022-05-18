import styled from 'styled-components';
import { colors } from '../../assets/styles/default';

export const Container = styled.section`
  display: flex;
  width: 1440px;
  margin-top: 64px;

  img {
    height: 624px;
    margin-right: 80px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: ${colors.primary.dark};
      font-size: 56px;
      line-height: 64px;

      img {
        height: 48px;
        margin-left: 16px;
      }
    }

    p {
      margin-top: 32px;
      font-size: 20px;
      width: 774px;

      color: #898989;
    }

    a {
      margin-top: 16px;
      text-decoration: none;
      text-align: center;
      color: #fff;

      width: 200px;
      padding:16px;
      background: ${colors.primary.main};
      border-radius: 50px;
      transition: background 0.2s;

      &:hover {
        background: ${colors.primary.dark};
      }
    }
  }

`;
