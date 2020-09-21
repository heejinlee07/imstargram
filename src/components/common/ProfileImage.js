import React from 'react';
import { ProfileImageUi } from './ProfileImage.styles';

function ProfileImage({ ...rest }) {
  return <ProfileImageUi {...rest}></ProfileImageUi>;
}

export default ProfileImage;
