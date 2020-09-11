import React from 'react';
import {
  DirectContainer,
  DirectWrap,
  DirectSection,
  MessageVeiwSection
} from './Direct.Styles';
import ButtonUi from "../../components/common/Buttons";
import { buttonSkyBlue, bodyBgWhite } from "../../styles/variables";
import { SvgIcon } from "../../styles/commonIcons/SvgIcons";
import { iconList } from "../../styles/commonIcons/path";

const Direct = () => {
  return (
    <DirectContainer>
      <DirectWrap>
        <DirectSection>
          <header>
            <h3>Direct</h3>
            <div>
              <SvgIcon
                aria-label="게시물"
                width={24}
                height={24}
              >
                <path d={iconList.direct}></path>
                <path d={iconList.direct1}></path>
                <path d={iconList.direct2}></path>
              </SvgIcon>
            </div>
          </header>
          {/* <div>
            <ul>
              <li></li>
            </ul>
          </div> */}
        </DirectSection>
        <MessageVeiwSection>
          <div></div>
          <h2>내 메세지</h2>
          <p>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</p>
          <ButtonUi
            color={bodyBgWhite}
            bgColor={buttonSkyBlue}
            width={76}
            height={20}
            fontSize={14}
          >
            메세지 보내기
          </ButtonUi>
        </MessageVeiwSection>
      </DirectWrap>
    </DirectContainer>
  );
};

export default Direct;