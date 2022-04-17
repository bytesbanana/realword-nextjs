import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import { SESSION_PASSWORD } from './const';

const sessionOptions = {
  cookieName: 'conduit_session',
  password: SESSION_PASSWORD,
  secure: process.env.NODE_ENV === 'production',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export const withSession = (handler) =>
  withIronSessionApiRoute((req, res) => {
    return handler(req, res);
  }, sessionOptions);

export const withAuthentication = (handler) =>
  withIronSessionSsr((ctx) => {
    const { req } = ctx;
    const user = req?.session?.user;

    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return handler(ctx);
  }, sessionOptions);
