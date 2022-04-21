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
  async setFavorite(slug, isFav) {
    try {
      let res;
      const url = `/articles/${slug}/favorite`;
      if (isFav) {
        res = await httpClient.post(url);
      } else {
        res = await httpClient.delete(url);
      }
      return res.data.article;
    } catch (error) {
      return error.response.data;
    }
  },
};

export default ArticlesAPI;
