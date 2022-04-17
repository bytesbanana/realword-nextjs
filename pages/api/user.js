import { withSession } from 'lib/session';
import { API_BASE_URL } from 'lib/const';

export default withSession(async (req, res) => {
  if (!['GET', 'PUT'].includes(req.method)) {
    return res.status(400).json();
  }

  const session = req.session;
  if (!session) {
    return res.status(401).json();
  }

  console.log(req)

  const response = await fetch(`${API_BASE_URL}/user`, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${session?.user?.token}`,
    },
    body: req.method === 'PUT' ? req.body : undefined,
  });

  const data = await response.json();

  if (response.ok) {
    req.session.user = data.user;
    const { token, ...rest } = data.user;
    await req.session.save();
    return res.json({
      user: rest,
    });
  }

  return res.status(response.status).json(data);
});
