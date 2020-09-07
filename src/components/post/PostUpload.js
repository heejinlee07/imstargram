import React, { useState, useEffect } from 'react';
import Unsplash from 'unsplash-js';
import { unsplashKey } from '../../services/unsplashKey';
import unsplashApi from '../../services/unsplashApi';
import Cards from '../common/Cards';
import Inputs from '../common/Inputs';
import Buttons from '../common/Buttons';
import PhotoList from './PhotoList';

function PostUpload() {
  const [activePhoto, setActivePhoto] = useState(false);

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
      <h1>업로드 컴포넌트 만드는중임</h1>
      <Cards>
        <Inputs
          height={200}
          width={300}
          placeholder="포스트를 업로드하세요:)"
        />
        {!activePhoto ? (
          <Buttons onClick={() => setActivePhoto(true)}>사진고르기</Buttons>
        ) : (
          <>
            {images?.map((image) => (
              <PhotoList image={image} />
            ))}
          </>
        )}
        <Buttons>게시</Buttons>
      </Cards>
    </div>
  );
}

export default PostUpload;
