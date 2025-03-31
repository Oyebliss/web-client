import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { getPage } from '@/@layout_shared/helpers/meta';
import { appInfo } from '@/@layout_app/helpers/appInfo';

import PageHeadElement from '@/@layout_shared/components/PageHeadElement';
import { UserContainer_Community } from '@/@layout_app/hooks/useUser';
import { AuthContainer_Community } from '@/@layout_app/hooks/useAuth';


export default function PageStructure_App({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const { pageTitle } = getPage({ pathname, layoutName: appInfo.name });

  return (
    <AuthContainer_Community.Provider>
      <UserContainer_Community.Provider>
        <PageHeadElement
          pageTitle={pageTitle}
          faviconUrl='/@images_app/favicon.ico'
        />
        {/* Sidebar and header was here */}
        <>Sidebar and Header Content</>
        <main>
          { children }
        </main>
      </UserContainer_Community.Provider>
    </AuthContainer_Community.Provider>
  );
}
