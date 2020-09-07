import styled from 'styled-components';
import { borderGrey, fontColorBlack } from '../../styles/variables';

export const HeaderWrap = styled.div`
  width: 100%;
  height: 54px;
  background-color: #fff;
  border-bottom: solid 1.25px ${borderGrey};
`;

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 975px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #fff;
  height: 100%;
  h1 {
    width: 360px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  li {
    cursor: pointer;
    padding-left: 22px;
  }
`;

export const HeaderProfile = styled.div`
  width: 22px;
  height: 22px;
  border: 1px solid ${(props) => props.solid || fontColorBlack};
  border-radius: 50%;
  cursor: pointer;
`;
