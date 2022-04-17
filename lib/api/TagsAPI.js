import { API_BASE_URL } from 'lib/const';

const TagsAPI = {
  async getTags() {
    try {
      const res = await fetch(`${API_BASE_URL}/tags`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      return data.tags;
    } catch {
      return null;
    }
  },
};

export default TagsAPI;
