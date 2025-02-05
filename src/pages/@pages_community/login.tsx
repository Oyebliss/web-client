import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_Community } from '@/@layout_community/Community_Layout';
import { login, signUp } from '@/@core/auth';
import { useEffect } from 'react';

const LoginPage_Community: NextPageWithLayout = () => {
  const testSignUp = async () => {
    try {
      const response = await signUp('Testing2@test.com', '12345');
      console.log('Signup Responses:', response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('SignUp Error:', error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
    }
  };

  const testLogin = async () => {
    try {
      const response = await login('Testing2@test.com', '12345');
      console.log('Login Response:', response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Login Error:', error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
    }
  };

  useEffect(() => {
    testSignUp();
    testLogin();
  }, []);
  return (
    <>
      <p>Test Signup and Login Route</p>
    </>
  );
};

LoginPage_Community.getLayout = getLayout_Community;
export default LoginPage_Community;
