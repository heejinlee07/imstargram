import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import { MaterialIcon } from './PhotoSelect.styles';

const renderNav = (onClick, type) => {
  return (
    <MaterialIcon type={type} onClick={onClick}>
      {type}
    </MaterialIcon>
  );
};

function PhotoSelect({ image, onSelect }) {
  const imageList = image?.map((item) => ({
    original: item.urls.small,
    thumbnail: item.urls.thumb,
    originalAlt: item.alt_description,
  }));

  return (
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={true}
      showThumbnails={true}
      items={imageList}
      onClick={(e) => onSelect(e.target.getAttribute('src'))}
      onThumbnailClick={(e) => onSelect(e.target.getAttribute('src'))}
      renderLeftNav={(onClick) => renderNav(onClick, 'chevron_left')}
      renderRightNav={(onClick) => renderNav(onClick, 'chevron_right')}
    />
  );
}

PhotoSelect.propTypes = {
  image: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
};

export default PhotoSelect;
