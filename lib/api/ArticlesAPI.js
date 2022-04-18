import { API_BASE_URL } from 'lib/const';

const ArticlesAPI = {
  async getArticles(
    { token, search } = {
      token: null,
      search: {
        limit: 10,
        tag: null,
        offset: 0,
      },
    }
  ) {
    try {
      const searchParams = new URLSearchParams();
      Object.keys(search).forEach((key) => {
        const value = search[key];
        if (value) {
          searchParams.set(key, value);
        }
      });
      const res = await fetch(
        `${API_BASE_URL}/articles?${searchParams.toString()}`,
        {
          headers: {
            Authorization: token || undefined,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();

      return data.articles;
    } catch (e) {
      return null;
    }
  },
};

export default ArticlesAPI;
