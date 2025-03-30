import { jwtDecode } from 'jwt-decode';

export const checkAuth = (): boolean => {
  if (typeof window === 'undefined') return false;

  const token = localStorage.getItem('authToken');
  if (!token) return false;

  try {
    const decoded: { exp: number } = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();
    return !isExpired;
  } catch (error) {
    return false;
  }
};
