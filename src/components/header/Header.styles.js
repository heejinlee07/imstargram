import styled from 'styled-components';
import { borderGrey } from '../../styles/variables';

export const HeaderWrap = styled.div`
  width: 100%;
  height: 54px;
  background-color: lightgray;
  border-bottom: solid 1.250px black;
`;

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 975px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: red;
  height: 100%;
  h1 {
    width: 360px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: lime;
  align-items: center;
  position: relative;
  li {
    cursor: pointer;
    padding-left: 22px;
  }
`;



