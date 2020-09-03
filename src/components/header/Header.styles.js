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

export const HeaderProfile = styled.ul`
   width: 230px;
   background: rgba(var(--d87,255,255,255),1);
   position: absolute;
   top: 54px;
   left: 0;
   border-radius: 6px;
   text-align: left;
   li, div {
     display: block;
     width: 170px;
     width: 100%;
     padding: 8px 16px;
     font-size: 14px;
     cursor: pointer;
   }
   li:hover {
    background-color: ${(props) => props.InputColor || borderGrey};
   }
   div:hover {
    background-color: ${(props) => props.InputColor || borderGrey};
   }
   div {
     border-top: 1px solid #dbdbdb;
   }
`;

