import React from 'react';
import { HeaderProfileModal, SquareShape } from './HeaderModal.styles';
import { Link } from 'react-router-dom';
import { SvgIcon } from '../../styles/commonIcons/SvgIcons';
import { iconList } from "../../styles/commonIcons/path";
const HeaderModal = () => {
  return (
    <div>

      <HeaderProfileModal>
        <Link to="/personal">
          <li>
            <SvgIcon
              viewBox="0 0 32 32"
              aria-label="프로필"
              width={15}
              height={15}
            >
              <path d={iconList.profile}></path>
            </SvgIcon>
            <span>프로필</span>
          </li>
        </Link>
        <Link to="/Personal/saved">
          <li>
            <SvgIcon
              aria-label="saved"
              width={15}
              height={15}
            >
              <path d={iconList.saved}></path>
            </SvgIcon>
            <span>저장됨</span>
          </li>
        </Link>
        <Link to="/accounts">
          <li>
            <SvgIcon
              aria-label="설정"
              width={15}
              height={15}
            >
              <path d={iconList.setUp}></path>
            </SvgIcon>
            <span>설정</span>
          </li>
        </Link>
        <div>로그아웃</div>
      </HeaderProfileModal>
      <SquareShape></SquareShape>
    </div>
  );
};

export default HeaderModal;
