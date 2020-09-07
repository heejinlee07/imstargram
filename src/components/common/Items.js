import React from 'react';
import { ItemsUi, LikeUi, CommentUi } from './Items.style';

import { SvgIcon } from '../../styles/commonIcons/SvgIcons';
import { iconList } from '../../styles/commonIcons/path';
import { fontColorWhite } from '../../styles/variables';

export default function Items({ children, likeCount, replyCount, ...rest }) {
  return (
    <ItemsUi {...rest}>
      <LikeUi>
        <SvgIcon fill={fontColorWhite}>
          <path d={iconList.activeHeart}></path>
        </SvgIcon>
        <p>{likeCount || 0}</p>
      </LikeUi>
      <CommentUi>
        <SvgIcon fill={fontColorWhite}>
          <path d={iconList.reply}></path>
        </SvgIcon>
        <p>{replyCount || 0}</p>
      </CommentUi>
    </ItemsUi>
  );
}
