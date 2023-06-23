import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      async function checkAuth() {
        const session = await getSession();

        // If the user is not authenticated, redirect to the login page
        if (!session) {
          router.push('/admin/login');
        }
      }

      checkAuth();
    }, []);

    // If the user is authenticated, render the protected page
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
