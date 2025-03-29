// Define types for user-related API responses
export interface UserProperties {
  _id: string;
  email: string;
  email_verified: boolean;
  role: string;
  instances: unknown[];
  createdAt: string;
  updatedAt: string;
}

export interface GetUserResponse {
  success: boolean;
  data: UserProperties;
  message: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}


export interface UpdatePropertiesResponse {
  message: string;
}

export interface UserListResponse {
  users: User[];
}