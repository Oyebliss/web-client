import { apiClient } from './apiClient';

// Save token locally
const saveAuthToken = (token: string): void => localStorage.setItem('authToken', token);

// Define types for the response structure
export interface AuthResponse {
  success: boolean;
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
    };
  };
  message: string;
}

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
