import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { WhiteButtons } from '../common/Buttons';
import useApi from '../../hooks/useApi';
import { getUserById } from '../../services/usersApi';
import Inputs from '../common/Inputs';
import {
  NoneEditMode,
  PostCommentList,
  CommentText,
} from './PostComment.styles';
import { nonSelectGrey, linkBlue, heartRed } from '../../styles/variables';

const PostComment = ({ comment, _editComment, _deleteComment }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const getUser = useCallback(() => getUserById(comment.userId), [
    comment.userId,
  ]);
  const { data } = useApi(getUser);

  const editContents = (e) => {
    if (e.key !== 'Enter') return;
    _editComment(comment.id, editText);
    setEditText('');
    setEditMode(false);
  };

  return (
    <PostCommentList>
      <WhiteButtons>{data?.name}</WhiteButtons>
      {!editMode ? (
        <>
          <CommentText key={comment.id}>{comment.text}</CommentText>
          <NoneEditMode>
            <WhiteButtons
              fontWeight={'normal'}
              margin={5}
              onClick={() => setEditMode(true)}
              color={nonSelectGrey}
              hoverColor={linkBlue}
            >
              수정하기
            </WhiteButtons>
            {/* <span class="material-icons">edit</span>
            <span class="material-icons">delete</span> */}
            <div onClick={() => _deleteComment(comment.id)}>
              <WhiteButtons
                fontWeight={'normal'}
                color={nonSelectGrey}
                hoverColor={heartRed}
              >
                x
              </WhiteButtons>
            </div>
          </NoneEditMode>
        </>
      ) : (
        <>
          <Inputs
            fontSize={14}
            margin={'0'}
            padding={2}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={editContents}
          />
          <WhiteButtons
            fontWeight={'normal'}
            color={nonSelectGrey}
            hoverColor={linkBlue}
            onClick={() => setEditMode(false)}
          >
            취소
          </WhiteButtons>
        </>
      )}
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
