/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { text } from '../components/auth/auth.helpers';

function useAuth_Community(intialState: { authType: string } | undefined) {
  const [authType, setLoginText] = useState(intialState?.authType);

  return {
    isLogin: authType === text.login,
    isSignup: authType === text.signup,
  };
}

export const AuthContainer_Community = createContainer(useAuth_Community);