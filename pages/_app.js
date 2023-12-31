import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { SessionProvider, useSession } from 'next-auth/react';

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

//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }

// export default MyApp;
