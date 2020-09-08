import React from 'react';
import ImageGallery from 'react-image-gallery';

function PhotoSelect({ image, onSelect }) {
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

export default PhotoSelect;
