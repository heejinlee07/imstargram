import React, { useCallback, useState } from 'react';
import moment from 'moment';
import useApi from '../../hooks/useApi';
import {
  getCommentsByPost,
  addComment,
  deleteComment,
  editComment,
} from '../../services/commentsApi';

import Inputs from '../common/Inputs';
import { fontColorBlack, nonSelectGrey } from '../../styles/variables';
import {
  PostCommentsBlock,
  PostCommentListBlock,
  PostInputBlock,
} from './PostCommentList.styles';
import { WhiteButtons } from '../common/Buttons';
import PostComment from './PostComment';

function PostCommentList({ user, post, users }) {
  // console.log('유저정보', users);
  // console.log('post정보', post);
  const [comment, setComment] = useState('');

  const userId = user?.id;
  const postId = post.id;

  const getComments = useCallback(() => getCommentsByPost(postId), [postId]);
  const { data: comments, isLoading, error, invoke: invokeComments } = useApi(
    getComments
  );

  const onKeyPress = (e) => {
    if (e.key !== 'Enter') return;
    createComment();
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const createComment = async () => {
    await addComment({
      userId: userId,
      postId: postId,
      text: comment,
      uploadDate: '2020/09/04',
    });
    await invokeComments();
    setComment('');
  };

  const _deleteComment = async (id) => {
    await deleteComment(id);
    await invokeComments();
  };

  const _editComment = async (id, text) => {
    await editComment(id, {
      text,
    });

    await invokeComments();
  };

  const today = moment();
  // console.log(today);

  return (
    <PostCommentsBlock>
      {isLoading && <div>로딩 중...</div>}
      {error && <div>{error.message}</div>}
      <PostCommentListBlock>
        {comments?.map((comment) => (
          <PostComment
            key={comment.id}
            comment={comment}
            _editComment={_editComment}
            _deleteComment={_deleteComment}
          />
        ))}
      </PostCommentListBlock>
      <WhiteButtons color={nonSelectGrey} fontSize={12}>
        시간표시
      </WhiteButtons>
      <PostInputBlock>
        <Inputs
          placeholder="댓글달기..."
          textAlign={'left'}
          padding={3}
          margin={'0'}
          color={fontColorBlack}
          fontSize={14}
          border={'none'}
          borderRadius={'0'}
          value={comment}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <WhiteButtons onClick={createComment}>게시</WhiteButtons>
      </PostInputBlock>
    </PostCommentsBlock>
  );
}

export default PostCommentList;
