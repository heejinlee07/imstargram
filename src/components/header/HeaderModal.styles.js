import styled from 'styled-components';
import { borderGrey } from '../../styles/variables';

export const HeaderProfileModal = styled.ul`
   width: ${(props) => props.modalWidth || 230}px;
   height: ${(props) => props.modalHeight}px;
   background: rgba(var(--d87,255,255,255),1);
   position: absolute;
   top: 54px;
   left: ${(props) => props.left || 0}px;
   border-radius: 6px;
   text-align: left;
   z-index: 1;
   li, div {
     display: block;
     width: 170px;
     margin: 0;
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

export const LikeModal = styled.ul`
  overflow: hidden;
  height: 100px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  li {
    div {
      border-bottom: 1px solid  ${borderGrey};
    }
  }
`