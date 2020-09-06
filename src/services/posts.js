import api from './api';

// users CRUD
export const getUsersByUser = (userId) => {
  return api.get(`/users?userId=${userId}`);
};

export const addUser = (params) => {
  return api.post(`/users`, params);
};

export const editUser = (userId, params) => {
  return api.put(`/users/${userId}`, params);
};

export const deleteUser = (userId) => {
  return api.delete(`/users/${userId}`);
};

// posts CRUD
export const getPostsByUser = (userId) => {
  return api.get(`/posts?userId=${userId}`);
};

export const addPost = (params) => {
  return api.post(`/posts`, params);
};

export const editPost = (postId, params) => {
  return api.put(`/posts/${postId}`, params);
};

export const deletePost = (postId) => {
  return api.delete(`/posts/${postId}`);
};

// comments CRUD
export const getCommentsByPost = (postId) => {
  return api.get(`/comments?postId=${postId}`);
};

export const addComment = (params) => {
  return api.post(`/comments`, params);
};

export const editComment = (commentId, params) => {
  return api.put(`/comments/${commentId}`, params);
};

export const deleteComment = (commentId) => {
  return api.delete(`/comments/${commentId}`);
};

// followInfos CRUD
// followerId = follow 요청을 받은 사람
// followingId = follow 버튼을 누른 사람

export const getFollowingsByFollowerId = (userId) => {
  return api.get(`/followInfos?followerId=${userId}`);
};

export const getFollowersByFollowingId = (userId) => {
  return api.get(`/followInfos?followingId=${userId}`);
};

//params에는 {followerId, followingId}가 들어가야 함.
export const addFollowInfo = (params) => {
  return api.post(`/followInfos`, params);
};

export const deleteFollowInfo = (id) => {
  return api.delete(`/followInfos/${id}`);
};
