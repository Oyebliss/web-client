import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GoogleCallback = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const { response } = router.query;

    if (response) {
      try {
        const parsedResponse = JSON.parse(response as string);
        const { token, user } = parsedResponse.data;

        if (token && user) {
          // ✅ Redirect to subdomain
          router.replace('/overview');
        }
      } catch (err) {
        console.error('Error parsing authentication response:', err);
        router.replace('/auth/error');
      }
    }
  }, [router.isReady, router.query]);

  return <p>Redirecting...</p>;
};

export default GoogleCallback;