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

// 스프레드 이미지 쓸건지 말건지? 개인적으로 반대.
// 아이콘 url 따오거니
// 폰트어썸 같은거 쓰거나

export default function PostCarousel() {
  return (
    <>
      <ImageGallery
        renderLeftNav={(onClick, disabled) => (
          <button
            disabled={disabled}
            className="image-gallery-custom-left-nav"
            onClick={onClick}
          >
            test
          </button>
        )}
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </>
  );
}
