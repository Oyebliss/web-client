import { UserProperties } from '@/@core/types/user.types';
import { getUserProperties } from '@/@core/user';
import { useState, useEffect, useCallback } from 'react';
import { createContainer } from 'unstated-next';

function useUser_Community() {
  const [user, setUser] = useState<UserProperties | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = useCallback(async () => {
    try {
      const userData = await getUserProperties();
      setUser(userData.data);
    } catch (err) {
      setError('Failed to load user data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { user, loading, error, refetch: fetchUserData };
}

// Export container
export const UserContainer_Community = createContainer(useUser_Community);
