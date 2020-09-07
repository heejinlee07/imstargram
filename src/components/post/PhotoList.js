import React from 'react';
import { ImageBlock, ImageSrc } from './PhotoList.styles';
import PostCarousel from './PostCarousel';

function PhotoList({ image }) {
  const { id, alt_description } = image;
  return (
    <div>
      test중
      <ImageBlock key={id}>
        <ImageSrc alt={alt_description} src={image.urls.small} />
      </ImageBlock>
    </div>
  );
}

export default PhotoList;
