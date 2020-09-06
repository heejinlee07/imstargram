import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { WhiteButtons } from '../common/Buttons';
import useApi from '../../hooks/useApi';
import { getUserById } from '../../services/usersApi';
import { PostCommentList } from './PostCommentList.styles';
import Inputs from '../common/Inputs';

const PostComment = ({ comment, _editComment, _deleteComment }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const getUser = useCallback(() => getUserById(comment.userId), [
    comment.userId,
  ]);
  const { data } = useApi(getUser);

  const editContents = (e) => {
    if (e.key !== 'Enter') return;
    console.log('hi');
    _editComment(comment.id, editText);
    setEditText('');
    setEditMode(false);
  };

  return (
    <PostCommentList>
      <WhiteButtons>{data?.name}</WhiteButtons>
      <div key={comment.id}>{comment.text}</div>
      {/*
       * todo: array안에서 특정 엘리먼트만 삭제하거나 수정하고 싶을 경우
       * 유니크한 값을 넘겨줘야 한다
       * 하지만, render가 끝난 후에는 이걸 넘길 방법이 없다
       * 그렇기 때문에, 사전에 함수를 '정의'할 때 id값을 넘겨줘야 한다
       */}
      {!editMode ? (
        <div onClick={() => setEditMode(true)}>수정하기</div>
      ) : (
        <Inputs
          fontSize={14}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={editContents}
        />
      )}
      <div onClick={() => _deleteComment(comment.id)}>
        <div>x</div>
      </div>
    </PostCommentList>
  );
};

PostComment.propTypes = {
  comment: PropTypes.shape({
    userId: PropTypes.number,
    postId: PropTypes.number,
    text: PropTypes.string,
    uploadDate: PropTypes.string,
    id: PropTypes.number,
  }),
  _editComment: PropTypes.func.isRequired,
  _deleteComment: PropTypes.func.isRequired,
};

export default PostComment;
