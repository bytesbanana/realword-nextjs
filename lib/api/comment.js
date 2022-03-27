import { API_BASE_URL } from '../const';

const CommentAPI = {
  getComment: async (slug) => {
    try {
      const response = await fetch(`${API_BASE_URL}/articles/${slug}/comments`);
      if (response.ok) {
        return response.json();
      }
      return null;
    } catch {
      return null;
    }
  },
};

export default CommentAPI;
