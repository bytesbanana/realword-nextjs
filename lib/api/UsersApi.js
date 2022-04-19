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
};

export default UsersAPI;
