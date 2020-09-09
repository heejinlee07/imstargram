import api from './api';

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
