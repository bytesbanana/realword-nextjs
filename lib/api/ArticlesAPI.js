import httpClient from 'httpClient';

const ArticlesAPI = {
  async getArticles(feed, tag, author, favorited, limit = 10, offset = 0) {
    try {
      const res = await httpClient.get(`/articles${feed ? '/feed' : ''}`, {
        params: {
          tag,
          limit,
          offset,
          author,
          favorited,
        },
      });

      return res.data.articles;
    } catch (e) {
      return [];
    }
  },
  async getArticleBySlug(slug) {
    try {
      const res = await httpClient.get(`/articles/${slug}`);
      return res.data.article;
    } catch (err) {
      return null;
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
  async getCommentsBySlug(slug) {
    try {
      const res = await httpClient.get(`/articles/${slug}/comments`);
      return res.data.comments;
    } catch (error) {
      return [];
    }
  },
  async commentAnArticle(slug, comment) {
    try {
      const res = await httpClient.post(`/articles/${slug}/comments`, {
        comment: {
          body: comment,
        },
      });
      return res.data.comment;
    } catch (error) {
      return error.response.data;
    }
  },
  async createArticle(article) {
    try {
      const res = await httpClient.post(`/articles`, {
        article,
      });

      return res.data.article;
    } catch (e) {
      return e.response.data;
    }
  },
};

export default ArticlesAPI;
