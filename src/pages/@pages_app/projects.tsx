import { NextPageWithLayout } from '@/pages/_app';
import { getLayout_App } from '@/@layout_app/App_Layout';
import { UserContainer_Community } from '@/@layout_app/hooks/useUser';
import { AuthContainer_Community } from '@/@layout_app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProjectsPage_App: NextPageWithLayout = () => {
  const {  user } = UserContainer_Community.useContainer();
  const { isAuthenticated } = AuthContainer_Community.useContainer();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAuthenticated) {
        router.replace('/login');
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [isAuthenticated, router]);
  
  return (
    <>
      {/* project page content was here */}
      <div>Overview Page content area</div>
      <p>email:{ user?.email}</p>
      <p>role:{ user?.role}</p>
    </>
  );
};

ProjectsPage_App.getLayout = getLayout_App;
export default ProjectsPage_App;
