import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
function PhotoSelect({ image, onSelect }) {
  console.log('image', image);
  const imageList = image?.map((item) => ({
    original: item.urls.small,
    thumbnail: item.urls.thumb,
  }));
  return (
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={true}
      showThumbnails={true}
      items={imageList}
      onClick={(e) => onSelect(e.target.getAttribute('src'))}
    />
  );
}

PhotoSelect.propTypes = {
  image: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
};

export default PhotoSelect;
