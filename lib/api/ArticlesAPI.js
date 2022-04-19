import httpClient from 'httpClient';

const ArticlesAPI = {
  async getArticles(feed, tag, limit = 10, offset = 0) {
    try {
      const res = await httpClient.get(`/articles${feed ? '/feed' : ''}`, {
        params: {
          tag,
          limit,
          offset,
        },
      });

      return res.data.articles;
    } catch (e) {
      return [];
    }
  },
};

export default ArticlesAPI;
