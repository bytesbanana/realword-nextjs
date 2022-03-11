import { API_BASE_URL } from '../const';

const TagAPI = {
  getTags: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tags`);

      return response.json();
    } catch (error) {
      return error.response;
    }
  },
};

export default TagAPI;
