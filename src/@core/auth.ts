import { apiClient } from './api-client';
import { AuthResponse } from './types/auth.types';

// Save token locally
const saveAuthToken = (token: string): void => localStorage.setItem('authToken', token);

// Signup request
export const signUp = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await apiClient<AuthResponse>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  saveAuthToken(response.data.token); // Save token after successful signup
  return response;
};

// Login request
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await apiClient<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  console.log('Received Token:', response.data.token);
  saveAuthToken(response.data.token); // Save token after successful login
  return response;
};
