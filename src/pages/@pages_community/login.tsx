import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_Community } from '@/@layout_community/Community_Layout';
import Auth_Community from '@/@layout_community/components/auth/Auth';
import { AuthContainer_Community } from '@/@layout_community/hooks/useAuth';
import { text } from '@/@layout_community/components/auth/auth.helpers';

const LoginPage_Community: NextPageWithLayout = () => {
  return (
    <AuthContainer_Community.Provider initialState={{ authType: text.login }}>
      <Auth_Community></Auth_Community>
    </AuthContainer_Community.Provider>
  );
};

LoginPage_Community.getLayout = getLayout_Community;
export default LoginPage_Community;
