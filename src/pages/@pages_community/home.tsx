import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_Community } from '@/@layout_community/Community_Layout';
import Link from 'next/link';

const HomePage_Community: NextPageWithLayout = () => {
  return (
    <>
      <p style={{marginBottom: 20}}>Dummy Page Content: CSS Module Test!</p>
      {/* This is to access the register and login route for the mean time */}
      <Link href={'http://app.localhost:3000/signup'} style={{padding: 10, borderRadius: 10, backgroundColor: 'green', marginRight: 10}}>SignUp</Link>
      <Link href={'http://app.localhost:3000/login'} style={{padding: 10, borderRadius: 10, backgroundColor: 'green'}}>Login</Link>
    </>
  );
};

HomePage_Community.getLayout = getLayout_Community;
export default HomePage_Community;
