import api from './api';

// posts CRUD

//전체 post GET
export const getPosts = () => {
  return api.get(`/posts`);
};

//userId별로 GET
export const getPostsByUser = (userId) => {
  return api.get(`/posts?userId=${userId}`);
};

// export const getLikeCountsByPost = (params) => {
//   return api.get(`/posts`, params);
// };

export const getLikeCountsByPost = (postId) => {
  return api.get(`/posts?postId=${postId}`);
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

// 랜덤 피드용 post 불러오기
export const getRandomPost = (pageNum) => {
  return api.get(`/posts?_start=${9 * (pageNum - 1)}&_limit=3`);
};
