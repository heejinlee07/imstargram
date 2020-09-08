import React, { useState, useEffect, useCallback } from 'react';
import Unsplash from 'unsplash-js';
import { unsplashKey } from '../../services/unsplashKey';
import unsplashApi from '../../services/unsplashApi';
import Cards from '../common/Cards';
import Inputs from '../common/Inputs';
import { WhiteButtons } from '../common/Buttons';
import PhotoSelect from './PhotoSelect';

import {
  PostUploadCardBlock,
  PostUploadHeader,
  ButtonBlock,
} from './PostUploadCard.styles';
import { addPost, getPostsByUser } from '../../services/postsApi';
import useApi from '../../hooks/useApi';
import Posts from '../post/Posts';

function PostUploadCard() {
  const [activePhoto, setActivePhoto] = useState(false);
  const [image, setImage] = useState();
  const [posted, setPosted] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState();

  const unsplash = new Unsplash({ accessKey: unsplashKey });
  // console.log(unsplash);

  useEffect(() => {
    async function getPhotos() {
      try {
        const { data } = await unsplashApi.get(
          `/photos?client_id=${unsplashKey}&w=400&h=300&fit=max`
        );
        setImage(data);
        console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    }
    getPhotos();
  }, []);
  const userId = 1;
  const getPosts = useCallback(() => getPostsByUser(userId), [userId]);
  const { data: posts, invoke: invokePosts } = useApi(getPosts);

  const onSelect = (src) => {
    console.log('Selected', src);
    setSelectedPhoto(src);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setPosted(e.target.value);
  };

  const createPost = async () => {
    await addPost(
      {
        userId: 1,
        text: posted,
        image: selectedPhoto,
        location: '서울',
        likeCount: 12,
        uploadDate: '2020/09/04',
      },
      { ...posts }
    );
    await invokePosts();
    setPosted('');
  };

  //todo: cards styles 사이즈 속성공통화 필요
  return (
    <PostUploadCardBlock>
      <Cards style={{ margin: '10px 0' }}>
        <PostUploadHeader>업로드 컴포넌트 만드는중임</PostUploadHeader>
        <Inputs
          height={150}
          placeholder="포스트를 업로드하세요:)"
          value={posted}
          onChange={onChange}
        />
        <ButtonBlock>
          {!activePhoto ? (
            <>
              <WhiteButtons>게시</WhiteButtons>
              <WhiteButtons onClick={() => setActivePhoto(true)}>
                사진고르기
              </WhiteButtons>
            </>
          ) : (
            <>
              <WhiteButtons onClick={createPost}>게시</WhiteButtons>
              <WhiteButtons>사진고르기</WhiteButtons>
              <PhotoSelect image={image} onSelect={onSelect} />
            </>
          )}
        </ButtonBlock>
      </Cards>
      {posts?.map((post) => (
        <Posts post={post} />
      ))}
    </PostUploadCardBlock>
  );
}

export default PostUploadCard;
