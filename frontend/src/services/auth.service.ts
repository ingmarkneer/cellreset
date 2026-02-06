import api from './api';

export interface RegisterData {
  email: string;
  password: string;
  consent: {
    terms: boolean;
    privacy: boolean;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

export interface VerifyEmailData {
  email: string;
  code: string;
}

export const authService = {
  register: (data: RegisterData) => api.post('/auth/register', data),
  
  verifyEmail: (data: VerifyEmailData) => api.post('/auth/verify-email', data),
  
  login: (data: LoginData) => api.post('/auth/login', data),
  
  forgotPassword: (email: string) => api.post('/auth/forgot-password', { email }),
  
  resetPassword: (token: string, new_password: string) =>
    api.post('/auth/reset-password', { token, new_password }),
};
