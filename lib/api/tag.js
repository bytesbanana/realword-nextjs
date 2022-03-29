import { API_BASE_URL } from '../const';

const TagAPI = {
  getTags: async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
      let headers = undefined;
      if (user) {
        headers = { Authorization: `Token ${user.token}` };
      }
      const response = await fetch(`${API_BASE_URL}/tags`, {
        headers,
      });

      return response.json();
    } catch (error) {
      return error.response;
    }
  },
};

export default TagAPI;
