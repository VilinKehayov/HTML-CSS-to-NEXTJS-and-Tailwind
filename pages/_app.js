import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/client';

// import '../styles/tailwind.css';

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   const [session, loading] = useSession();

//   useEffect(() => {
//     // Check if the user is not authenticated and the current route is a protected route
//     if (!session && isProtectedRoute(router.pathname)) {
//       router.push('/');
//     }
//   }, [session, router]);

//   // Define the protected routes
//   const protectedRoutes = ['/pharmacies', '/promo'];

//   // Function to check if a route is protected
//   const isProtectedRoute = (route) => protectedRoutes.includes(route);

//   return <Component {...pageProps} />;
// }

// export default MyApp;


