import React, { useState, useEffect } from 'react';
import { ImageBlock, ImageSrc } from './PhotoList.styles';

function PhotoList({ image }) {
  const { id, alt_description } = image;
  return (
    <div>
      test중
      <ImageBlock>
        <ImageBlock key={id}>
          <ImageSrc alt={alt_description} src={image.urls.small} />
        </ImageBlock>
      </ImageBlock>
    </div>
  );
}

export default PhotoList;
