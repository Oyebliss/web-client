/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { text } from '@/@layout_app/components/auth/auth.helpers';
import { login, signInWithGoogle, signUp } from '@/@core/auth';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/@layout_app/hooks/checkAuth';

function useAuth_Community(intialState: { authType: string } | undefined) {
  const [authType, setLoginText] = useState(intialState?.authType);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const isLogin = authType === text.login;
  const isSignup = authType === text.signup;

  useEffect(() => {
    // ✅ Use checkAuth to determine authentication state
    setIsAuthenticated(checkAuth());
  }, []);


  const handleAuth = async (email: string, password: string, confirmPassword?: string) => {
    setLoading(true);
    setError(null);

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
      }
      // ✅ Redirect User After Login
      if (!isSignup) {
        response = await login(email, password);
        setMessage(response.message);

        router.replace('/');
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

  const googleSignIn = () => {
    setGoogleLoading(true);

    signInWithGoogle();
  };

  return {
    isLogin,
    isSignup,
    loading,
    error,
    message,
    isAuthenticated,
    handleAuth,
    googleSignIn,
    googleLoading
  };
}

export const AuthContainer_Community = createContainer(useAuth_Community);