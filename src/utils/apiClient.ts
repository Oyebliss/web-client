const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

// Custom fetch API client
export const apiClient = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : ''; // Get token from localStorage

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  // Type casting to ensure that response data is in the expected format
  return (await response.json()) as T;
};
