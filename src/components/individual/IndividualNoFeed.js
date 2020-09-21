import React from 'react';
import {
  NoFeed,
  BasicImg
} from './IndividualFeed.styles';
import { LinkContainer, AppDownloadLink } from '../../components/sign/appLink/AppLink.styles';

const IndividualNoFeed = () => {
  return (
    <NoFeed>
      <BasicImg />
      <div>
        <h3>소중한 순간을 포착하여 공유해보세요.</h3>
        <p>앱을 다운로드하고 첫 사진이나 동영상을 공유해보세요.</p>
        <LinkContainer>
          <AppDownloadLink
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
            alt="App Store에서 이용 가능"
          />
          <AppDownloadLink
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
            alt="Google Play에서 이용 가능"
          />
        </LinkContainer>
      </div>
    </NoFeed>
  );
};
export default IndividualNoFeed;
