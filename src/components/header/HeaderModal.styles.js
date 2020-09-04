import styled from 'styled-components';
import { borderGrey } from '../../styles/variables';

export const HeaderProfileModal = styled.ul`
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