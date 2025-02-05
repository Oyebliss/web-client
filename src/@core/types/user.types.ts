// Define types for user-related API responses
export interface UserProperties {
  email: string;
  name: string;
  role: string;
  password: string;
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