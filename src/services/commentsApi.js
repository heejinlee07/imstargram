import api from './api';

// comments CRUD

//전체 comments GET
export const getComments = () => {
  return api.get(`/comments`);
};

//postId 별로 GET
export const getCommentsByPost = (postId) => {
  return api.get(`/comments?postId=${postId}`);
};
// postId list 별로 GET
export const getCommentByPostIds = (postListIds) => {
  const query = postListIds.map((id) => `postId=${id}`).join('&');
  return api.get(`/comments?${query}`);
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
