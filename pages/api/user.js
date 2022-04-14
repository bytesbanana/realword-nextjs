import { withSession } from 'lib/session';

export default withSession(async function getUser(req, res) {
  const user = req.session.user;

  if (user) {
    res.json({
      user,
    });
  } else {
    res.json({
      user: null,
    });
  }
});
