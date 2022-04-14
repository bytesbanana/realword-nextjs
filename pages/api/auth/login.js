import { withSession } from 'lib/session';
import { API_BASE_URL } from 'lib/const';

export default withSession(async function loginRoute(req, res) {
  if (req.method !== 'POST') {
    res.status(401).json();
  }
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: req.body,
    });

    if (response.ok) {
      const data = await response.json();
      req.session.user = data.user;
      await req.session.save();
      res.status(response.status).json(data);
    } else {
      res.status(response.status).json(response.body);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
