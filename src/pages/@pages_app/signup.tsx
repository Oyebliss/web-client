import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_Community } from '@/@layout_community/Community_Layout';
import Auth_Community from '@/@layout_app/components/auth/Auth';
import { AuthContainer_Community } from '@/@layout_app/hooks/useAuth';
import { text } from '@/@layout_app/components/auth/auth.helpers';

const SignupPage_Community: NextPageWithLayout = () => {
  return (
    <AuthContainer_Community.Provider initialState={{ authType: text.signup }}>
      <Auth_Community></Auth_Community>
    </AuthContainer_Community.Provider>
  );
};

SignupPage_Community.getLayout = getLayout_Community;
export default SignupPage_Community;
