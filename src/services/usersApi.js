import api from './api';

// users CRUD

//user 전체 리스트 GET
export const getUsers = () => {
  return api.get(`/users`);
};

//user id 별로 GET
export const getUserById = (userId) => {
  return api.get(`/users/${userId}`);
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
