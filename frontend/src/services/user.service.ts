import api from './api';

export const userService = {
  getMe: () => api.get('/users/me'),
  
  updateProfile: (data: any) => api.put('/users/me/profile', data),
  
  deleteAccount: () => api.delete('/users/me'),
  
  exportData: () => api.get('/users/me/export'),
};
