import api from './api';

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
