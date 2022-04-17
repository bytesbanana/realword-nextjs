import { API_BASE_URL } from 'lib/const';

const ArticlesAPI = {
  async getArticles(token = null) {
    try {
      const res = await fetch(`${API_BASE_URL}/articles?limit=10&offset=0`, {
        headers: {
          Authorization: token || undefined,
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      return data.articles;
    } catch (e) {
      return null;
    }
  },
};

export default ArticlesAPI;
