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
import { fontColorBlack } from '../../styles/variables';
import {
  PostCommentsBlock,
  PostCommentListBlock,
  PostInputBlock,
} from './PostCommentList.styles';
import { WhiteButtons } from '../common/Buttons';
import PostComment from './PostComment';

function PostCommentList() {
  const [comment, setComment] = useState('');

  const postId = 1;
  const getComments = useCallback(() => getCommentsByPost(postId), [postId]);

  const { data: comments, isLoading, error, invoke: invokeComments } = useApi(
    getComments
  );

  const onKeyPress = (e) => {
    if (e.key !== 'Enter') return;
    createComment();
    // todo: setComment와 같은걸로 값을 초기화 하고자 한다면,
    // input element를 controlled element로 바꿔줘야 한다
    // 결국, onChange를 넣으려면, value를 꼭 같이 써줘야 한다
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const createComment = async () => {
    await addComment({
      userId: 3,
      postId: 1,
      text: comment,
      uploadDate: '2020/09/04',
    });
    await invokeComments();
    setComment('');
  };

  /**
   * todo: 그렇기 때문에 해당 함수는 매개변수를 받도록 설정해야한다
   */
  const _deleteComment = async (id) => {
    console.log(id);
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
  console.log(today);

  return (
    <PostCommentsBlock>
      {isLoading && <div>로딩 중...</div>}
      {error && <div>{error.message}</div>}
      <PostCommentListBlock>
        {comments?.map((comment) => (
          <PostComment
            comment={comment}
            _editComment={_editComment}
            _deleteComment={_deleteComment}
          />
        ))}
      </PostCommentListBlock>
      <WhiteButtons>시간표시</WhiteButtons>
      <PostInputBlock>
        <Inputs
          placeholder="댓글달기..."
          textAlign={'left'}
          padding={3}
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
