import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
  },
];

export default function PostCarousel({ imgUrlList }) {
  return (
    <>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={true}
        showThumbnails={false}
        items={imgUrlList || images}
      />
    </>
  );
}
