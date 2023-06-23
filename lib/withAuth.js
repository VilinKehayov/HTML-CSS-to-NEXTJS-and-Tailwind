// import { getSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const router = useRouter();

//     useEffect(() => {
//       async function checkAuth() {
//         const session = await getSession();

//         // If the user is not authenticated, redirect to the login page
//         if (!session) {
//           router.push('/admin/login');
//         }
//       }

//       checkAuth();
//     }, []);

//     // If the user is authenticated, render the protected page
//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;


import { getSession } from 'next-auth/react';
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
          // Store the current route before redirecting
          router.push({
            pathname: '/admin/login',
            query: { returnUrl: router.asPath }, // Pass the current route as a query parameter
          });
        }
      }

      checkAuth();
    }, []);

    // If the user is authenticated, render the protected page
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
