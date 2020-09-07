import styled from 'styled-components';

import { bodyBgBlack, fontColorWhite } from '../../styles/variables';

export const ItemsUi = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  color: ${fontColorWhite};
  background: ${bodyBgBlack + 80};
`;

export const LikeUi = styled.div`
  display: flex;

  p {
    margin-left: 5px;
    font-size: 22px;
  }
`;

export const CommentUi = styled(LikeUi)`
  margin-left: 15px;
`;
