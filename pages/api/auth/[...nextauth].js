import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  secret: 'SECRET_KEY',
  callbacks: {
    async jwt({ token: jwtToken, user }) {
      if (user) {
        const { token, ...rest } = user;
        jwtToken = {
          ...jwtToken,
          ...rest,
          accessToken: token,
        };
      }
      return jwtToken;
    },
    session({ session, user, token: jwt }) {
      if (jwt) {
        session.accessToken = jwt.accessToken;
        session.user = {
          ...session.user,
          username: jwt.username,
          bio: jwt.bio,
        };
      }

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch('https://api.realworld.io/api/users/login', {
          method: 'POST',
          body: JSON.stringify({
            user: {
              email: credentials?.email,
              password: credentials?.password,
            },
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();

        if (res.ok && data) {
          return data.user;
        }

        return null;
      },
    }),
  ],
});
