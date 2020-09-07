import api from './api';

// comments CRUD
export const getCommentsByPost = (postId) => {
  return api.get(`/comments?postId=${postId}`);
};

export const addComment = (params) => {
  return api.post(`/comments`, params);
};

export const editComment = (commentId, params) => {
  return api.patch(`/comments/${commentId}`, params);
};

export const deleteComment = (commentId) => {
  return api.delete(`/comments/${commentId}`);
};
