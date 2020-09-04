import React from 'react';
import {
  HeaderProfileModal
} from './HeaderModal.styles';

const HeaderModal = () => {

  return (
    <div>
      <HeaderProfileModal>
        <li><span></span>프로필</li>
        <li><span></span>저장됨</li>
        <li><span></span>설정</li>
        <div>로그아웃</div>
      </HeaderProfileModal>
    </div>
  );
};

export default HeaderModal;