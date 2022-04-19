import httpClient from 'httpClient';

const TagsAPI = {
  async getTags() {
    try {
      const res = await httpClient.get('/tags');

      return res.data.tags;
    } catch {
      return [];
    }
  },
};

export default TagsAPI;
