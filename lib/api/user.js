import { BASE_URL } from '../const';

const UserAPI = {
  register: async (username, email, password) => {
    try {
      const body = {
        user: {
          username,
          email,
          password,
        },
      };

      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },
  login: async (email, password) => {
    try {
      const body = {
        user: {
          email,
          password,
        },
      };

      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default UserAPI;
