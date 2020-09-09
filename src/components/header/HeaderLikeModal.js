import React from 'react';
import {
  HeaderProfileModal,
} from './HeaderModal.styles';

const HeaderLikeModal = () => {

  return (
    <div>
      <HeaderProfileModal
        modalWidth={550}
        left={-265}
      >
        <ul>
          <li>누가좋아요</li>
          <li>팔로우했어요</li>
          <li></li>
        </ul>
      </HeaderProfileModal>
    </div>
  );
};

export default HeaderLikeModal;