import { BASE_URL } from '../const';

const ArticleAPI = {
  createArticle: async (title, description, body, tagList = []) => {
    try {
      const newArticle = {
        article: {
          title,
          description,
          body,
          tagList,
        },
      };

      const user = JSON.parse(localStorage.getItem('user'));

      const response = await fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
        body: JSON.stringify(newArticle),
      });

      return response.json();
    } catch (error) {
      return error.response;
    }
  },
  getGlobalArticles: async (limit = 10, offset = 0) => {
    try {
      const response = await fetch(
        `${BASE_URL}/articles?limit=${limit}&offset=${offset}`
      );

      return response.json();
    } catch (error) {
      return error.response;
    }
  },
  getArticleBySlug: async (slug) => {
    try {
      const response = await fetch(`${BASE_URL}/articles/${slug}`);
      return response.json();
    } catch (error) {
      return error.response;
    }
  },
};

export default ArticleAPI;
