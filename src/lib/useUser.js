import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthenticatedUser } from './common';

export function useUser() {
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserDetails() {
      const { info } = await getAuthenticatedUser();
      if (!info) {
        navigate('/sign-in');
        return;
      }

      setInfo(info);
    }

    getUserDetails();
  }, []);

  return { info };
}
