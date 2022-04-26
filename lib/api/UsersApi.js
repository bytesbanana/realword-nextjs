import httpClient from 'httpClient';

const UsersAPI = {
  async login(email, password) {
    try {
      const response = await httpClient.post('users/login', {
        user: {
          email,
          password,
        },
      });

      return response.data;
    } catch (err) {
      return err.response.data;
    }
  },
  async register(username, email, password) {
    try {
      const response = await httpClient.post('users', {
        user: {
          username,
          email,
          password,
        },
      });

      return response.data;
    } catch (err) {
      return err.response.data;
    }
  },
  async update({ image, username, bio, email, password }) {
    try {
      const response = await httpClient.put('user', {
        user: {
          image,
          username,
          bio,
          email,
          password,
        },
      });

      return response.data;
    } catch (err) {
      return err.response.data;
    }
  },
  async get() {
    try {
      const response = await httpClient.get('user');
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  },
  async setFollow(username, isFollow) {
    try {
      const url = `profiles/${username}/follow`;
      const res = await (isFollow
        ? httpClient.post(url)
        : httpClient.delete(url));

      return res.data.profile;
    } catch (error) {
      return null;
    }
  },
  async getByUsername(username) {
    try {
      const response = await httpClient.get(`profiles/${username}`);
      return response.data.profile;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default UsersAPI;
