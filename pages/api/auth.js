import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Admin Panel',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;

        // Replace the condition with your actual authentication logic
        if (username === 'admin' && password === 'password') {
          return { id: 1, name: 'Admin' }; // Sample user data
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
