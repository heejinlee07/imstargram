import api from './api';

// users CRUD
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
