import React, { useState, useEffect } from 'react';
import Unsplash from 'unsplash-js';
import { unsplashKey } from '../../services/unsplashKey';
import unsplashApi from '../../services/unsplashApi';
import styled from 'styled-components';

const ImageBlock = styled.img``;

export default function Test() {
  const [images, setImages] = useState();
  const [url, setUrl] = useState();

  const unsplash = new Unsplash({ accessKey: unsplashKey });
  console.log(unsplash);

  useEffect(() => {
    async function getPhotos() {
      try {
        const { data } = await unsplashApi.get(
          `/photos?client_id=${unsplashKey}`
        );
        setImages(data);
        console.log(data);
        console.log(data[0].urls.raw);
        setUrl(data[0].urls.raw);
      } catch (e) {
        console.log(e.message);
      }
    }
    getPhotos();
  }, []);

  return (
    <div>
      test중
      <div>
        {images?.map((image) => (
          <>
            <div key={images.id}>{image.alt_description}</div>
            <div>
              <ImageBlock src={image.urls.small} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
