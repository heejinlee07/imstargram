import React from 'react';
import { ItemWrap, ItemsUi, LikeUi, CommentUi } from './ThumbnailPost.style';

import { SvgIcon } from '../../styles/commonIcons/SvgIcons';
import { iconList } from '../../styles/commonIcons/path';
import { fontColorWhite } from '../../styles/variables';

/**
 * @description
 * @param {likeCount, replyCount, imgUrl}
 *
 * likeCount: 좋아요 수
 * replyCount: 댓글 수
 * imgUrl: 이미지 Url
 * isCarousel: 케러셀 인지 여부
 *
 * 주의 사항]
 * - size는 조절 불가 무조건 width 100% 정사각형
 */

export default function Items({
  likeCount,
  replyCount,
  imgUrl,
  isCarousel = false,
}) {
  return (
    <ItemWrap>
      <ItemsUi url={imgUrl} isCarousel={isCarousel}>
        <LikeUi>
          <SvgIcon fill={fontColorWhite}>
            <path d={iconList.activeHeart}></path>
          </SvgIcon>
          <p>{likeCount || 0}</p>
        </LikeUi>
        <CommentUi>
          <SvgIcon fill={fontColorWhite}>
            <path d={iconList.activeReply}></path>
          </SvgIcon>
          <p>{replyCount || 0}</p>
        </CommentUi>
      </ItemsUi>
    </ItemWrap>
  );
}
