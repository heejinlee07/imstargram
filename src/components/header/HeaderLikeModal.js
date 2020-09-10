import React from 'react';
import {
  HeaderProfileModal,
  LikeModal
} from './HeaderModal.styles';


const HeaderLikeModal = () => {

  return (
    <div>
      <HeaderProfileModal
        modalWidth={550}
        left={-265}
        modalHeight={362}
      >
        <LikeModal>
          <li><span></span><p>누가좋아요</p></li>
          <li><span></span></li>
        </LikeModal>
      </HeaderProfileModal>
    </div>
  );
};

export default HeaderLikeModal;