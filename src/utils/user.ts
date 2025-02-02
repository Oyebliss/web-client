import { apiClient } from './apiClient';

// Define types for user-related API responses
interface UserProperties {
  email: string;
  name: string;
  role: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}


interface UpdatePropertiesResponse {
  message: string;
}

interface UserListResponse {
  users: User[];
}


// Get all users (admin action)
export const getAllUsers = async (): Promise<UserListResponse> => {
  return await apiClient<UserListResponse>('/user', {
    method: 'GET',
  });
};

// Get user properties (requires authorization)
export const getUserProperties = async (): Promise<UserProperties> => {
  return await apiClient<UserProperties>('/user/get-properties', {
    method: 'GET',
  });
};

// Update user properties
export const updateUserProperties = async (properties: Partial<UserProperties>): Promise<UpdatePropertiesResponse> => {
  return await apiClient<UpdatePropertiesResponse>('/user/update-properties', {
    method: 'PUT',
    body: JSON.stringify(properties),
  });
};


// Update a single user property
export const updateUserProperty = async (propName: string, value: string): Promise<UpdatePropertiesResponse> => {
  return await apiClient<UpdatePropertiesResponse>('/user/update-any-property', {
    method: 'PATCH',
    body: JSON.stringify([{ propName, value }]),
  });
};

// Delete user
export const deleteUser = async (): Promise<void> => {
  return await apiClient<void>('/user/delete', {
    method: 'DELETE',
  });
};

// Delete all users (admin action)
export const deleteAllUsers = async (): Promise<void> => {
  return await apiClient<void>('/user', {
    method: 'DELETE',
  });
};
