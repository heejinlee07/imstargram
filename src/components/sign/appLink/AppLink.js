import React from 'react';
import { DownloadApp, LinkContainer, AppDownloadLink } from './AppLink.styles';

const AppLink = () => {
  return (
    <DownloadApp>
      앱을 다운로드하세요.
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
    </DownloadApp>
  );
};

export default AppLink;
