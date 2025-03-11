/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { text } from '../components/auth/auth.helpers';
import { login, signUp } from '@/@core/auth';
import { useRouter } from 'next/navigation';
import { setTimeout } from 'timers';

function useAuth_Community(intialState: { authType: string } | undefined) {
  const [authType, setLoginText] = useState(intialState?.authType);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  const isLogin = authType === text.login;
  const isSignup = authType === text.signup;

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const user = sessionStorage.getItem('user');
      setIsAuthenticated(!!token && !!user);
    };

    checkAuth();

    // ✅ Listen for storage changes
    window.addEventListener('storage', checkAuth);
    
    return () => window.removeEventListener('storage', checkAuth);
  }, []);


  const handleAuth = async (email: string, password: string, confirmPassword?: string) => {
    setLoading(true);
    setError(null);

    // ✅ Validation
    if (!email || !password || (isSignup && !confirmPassword)) {
      setError('All fields are required!');
      setLoading(false);
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      let response;
      if (isSignup) {
        response = await signUp(email, password);
        setMessage(response.message);

        router.push('/login');
      } else {
        response = await login(email, password);
        setMessage(response.message);
      }

      // ✅ Store Token and User Data
      localStorage.setItem('authToken', response.data.token);
      sessionStorage.setItem('user', JSON.stringify(response.data.user));

      setIsAuthenticated(true);


      // ✅ Redirect User After Login
      if (!isSignup) {
        setTimeout(() => {
          router.push('/overview'); // Redirect to App Manager Dashboard after 2secs - will be updated
        }, 3000);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };


  return {
    isLogin,
    isSignup,
    loading,
    error,
    message,
    isAuthenticated,
    handleAuth
  };
}

export const AuthContainer_Community = createContainer(useAuth_Community);