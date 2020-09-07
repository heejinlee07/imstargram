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
