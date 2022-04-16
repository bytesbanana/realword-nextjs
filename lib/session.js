import { withIronSessionApiRoute } from 'iron-session/next';
import { SESSION_PASSWORD } from './const';

const sessionOptions = {
  cookieName: 'conduit_session',
  password: SESSION_PASSWORD,
  secure: process.env.NODE_ENV === 'production',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export function withSession(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}
