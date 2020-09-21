import styled from 'styled-components';

import {
  bodyBgBlack,
  fontColorWhite,
  bodyBgtGrey,
} from '../../styles/variables';

import { iconList } from '../../styles/commonIcons/path';

export const ThumbnailPostWrap = styled.button`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border: 0;
`;

const carouselUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' height='28' viewBox='0 0 48 48' width='28'%3E%3Cpath d='${iconList.carousel}'%3E%3C/path%3E%3C/svg%3E")
no-repeat top 2% right 2%, `;

export const ThumbnailPostUi = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${fontColorWhite};
  background: ${(props) =>
    (props.isCarousel ? carouselUrl : '') +
    (props.url ? `url(${props.url}) no-repeat center/cover, ` : '') +
    bodyBgtGrey};
  cursor: pointer;

  div {
    opacity: 0;
  }

  &:hover {
    background: linear-gradient(${bodyBgBlack + 80}, ${bodyBgBlack + 80})
        no-repeat center/100%,
      ${(props) =>
        (props.isCarousel ? carouselUrl : '') +
        (props.url ? `url(${props.url}) no-repeat center/cover, ` : '') +
        bodyBgtGrey};

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
