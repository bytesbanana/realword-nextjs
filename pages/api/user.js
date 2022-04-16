import { withSession } from 'lib/session';
import { API_BASE_URL } from 'lib/const';

export default withSession(async function getUser(req, res) {
  if (!['GET', 'PUT'].includes(req.method)) {
    return res.status(400).json();
  }

  const session = req.session;
  if (!session) {
    return res.status(401).json();
  }

  const httpHeaders = new Headers();
  httpHeaders.append('Content-Type', 'application/json');
  httpHeaders.append('Authorization', `Token ${session?.user?.token}`);

  const request = new Request(`${API_BASE_URL}/user`, {
    method: req.method,
    headers: httpHeaders,
    body: req.method === 'PUT' ? req.body : undefined,
  });

  const response = await fetch(request);

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
