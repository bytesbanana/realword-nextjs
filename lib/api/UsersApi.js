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
};

export default UsersAPI;
