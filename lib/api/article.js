import { API_BASE_URL } from '../const';

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

      return await fetch(`${API_BASE_URL}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`,
        },
        body: JSON.stringify(newArticle),
      });
    } catch (error) {
      return error.response;
    }
  },
  getGlobalArticles: async (limit = 10, offset = 0) => {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
      const options = {};
      if (user) {
        options['headers'] = {
          Authorization: `Token ${user.token}`,
        };
      }

      const response = await fetch(
        `${API_BASE_URL}/articles?limit=${limit}&offset=${offset}`,
        options
      );

      return response.json();
    } catch (error) {
      return error.response;
    }
  },
  getArticleBySlug: async (slug) => {
    try {
      const response = await fetch(`${API_BASE_URL}/articles/${slug}`);
      return response.json();
    } catch (error) {
      return error.response;
    }
  },
  getArticleByAuthor: async (author, limit = 5, offset = 0) => {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
      const response = await fetch(
        `${API_BASE_URL}/articles?author=${author}&limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Token ${user.token}`,
          },
        }
      );
      return response.json();
    } catch (e) {
      return e.response;
    }
  },
  getFavoriteArticles: async (username, limit = 5, offset = 0) => {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
      const response = await fetch(
        `${API_BASE_URL}/articles?favorited=${username}&limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Token ${user.token}`,
          },
        }
      );
      return response.json();
    } catch (e) {
      return e.response;
    }
  },
  favoriteArticle: async (slug) => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await fetch(
        `${API_BASE_URL}/articles/${slug}/favorite`,
        {
          method: 'POST',
          headers: {
            Authorization: `Token ${user.token}`,
          },
        }
      );

      return response.json();
    } catch (e) {
      return e.response;
    }
  },
  unfavoriteArticle: async (slug) => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await fetch(
        `${API_BASE_URL}/articles/${slug}/favorite`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Token ${user.token}`,
          },
        }
      );

      return response.json();
    } catch (e) {
      return e.response;
    }
  },
};

export default ArticleAPI;
