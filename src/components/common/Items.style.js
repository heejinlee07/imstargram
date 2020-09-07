import styled from 'styled-components';

import {
  bodyBgBlack,
  fontColorWhite,
  bodyBgtGrey,
} from '../../styles/variables';

export const ItemWrap = styled.button`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border: 0;
`;

export const ItemsUi = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${fontColorWhite};
  background: ${(props) =>
    props.url
      ? `url(${props.url}) no-repeat center/cover, ${bodyBgtGrey}`
      : `${bodyBgtGrey}`};
  cursor: pointer;

  div {
    opacity: 0;
  }

  &:hover {
    background: linear-gradient(${bodyBgBlack + 80}, ${bodyBgBlack + 80})
        no-repeat center/100%,
      ${(props) =>
        props.url
          ? `url(${props.url}) no-repeat center/cover, ${bodyBgtGrey}`
          : `${bodyBgtGrey}`};

    div {
      opacity: 100;
    }
  }
`;

export const LikeUi = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
    font-size: 22px;
  }
`;

export const CommentUi = styled(LikeUi)`
  margin-left: 15px;
`;
