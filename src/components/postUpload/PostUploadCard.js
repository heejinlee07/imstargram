import React, { useState, useEffect } from 'react';
import { unsplashKey } from '../../services/unsplashKey';
import unsplashApi from '../../services/unsplashApi';
import Cards from '../common/Cards';
import Inputs from '../common/Inputs';
import { WhiteButtons } from '../common/Buttons';
import PhotoSelect from './PhotoSelect';
import { generateId } from '../../utils/generateId';
import {
  PostUploadCardBlock,
  PostUploadHeader,
  ButtonBlock,
} from './PostUploadCard.styles';
import { addPost } from '../../services/postsApi';

function PostUploadCard({ invokePosts, users }) {
  const [activePhoto, setActivePhoto] = useState(false);
  const [image, setImage] = useState();
  const [posted, setPosted] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState();

  useEffect(() => {
    async function getPhotos() {
      try {
        const { data } = await unsplashApi.get(
          `/photos?client_id=${unsplashKey}&w=400&h=300&fit=crop`
        );
        setImage(data);
        // console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    }
    getPhotos();
  }, []);

  const onSelect = (src) => setSelectedPhoto(src);

  const onChange = (e) => setPosted(e.target.value);

  const createPost = async () => {
    await addPost({
      userId: generateId(users),
      text: posted,
      image: selectedPhoto,
      location: '서울',
      likeCount: 12,
      uploadDate: '2020/09/04',
    });
    await invokePosts();
    setPosted('');
  };

  //todo: cards styles 사이즈 속성공통화 필요
  return (
    <PostUploadCardBlock>
      <Cards margin={'10px 0'}>
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
    </PostUploadCardBlock>
  );
}

export default PostUploadCard;
