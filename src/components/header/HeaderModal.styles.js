import styled from 'styled-components';
import { borderGrey } from '../../styles/variables';

export const HeaderProfileModal = styled.ul`
   width: ${(props) => props.modalWidth || 230}px;
   background: rgba(var(--d87,255,255,255),1);
   position: absolute;
   top: 54px;
   left: ${(props) => props.left || 0}px;
   border-radius: 6px;
   text-align: left;
   li, div {
     display: block;
     width: 170px;
     width: 100%;
     padding: 8px 16px;
     font-size: 15px;
     cursor: pointer;
     align-items: center;
     span {
       display: inline-block;
       padding-left: 10px;
     }
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

export const SquareShape = styled.div`
  position: absolute;
  top: 46px;
  right: 66px;
  width: 14px;
  height: 14px;
  background: rgba(var(--d87,255,255,255),1);
  transform: rotate(45deg);
`;