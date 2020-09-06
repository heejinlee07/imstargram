import React from 'react';
import { HeaderProfileModal } from './HeaderModal.styles';
import { Link } from 'react-router-dom';

const HeaderModal = () => {
  return (
    <div>
      <HeaderProfileModal>
        <Link to="/personal">
          <li>
            <span>프로필</span>
          </li>
        </Link>
        <li>
          <span>저장됨</span>
        </li>
        <Link to="/accounts">
          <li>
            <span>설정</span>
          </li>
        </Link>
        <div>로그아웃</div>
      </HeaderProfileModal>
    </div>
  );
};

export default HeaderModal;
