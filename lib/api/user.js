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
  profile: async () => {
    try {
      const response = await fetch(`${BASE_URL}/profiles/testuser01`);
      return response.json();
    } catch (error) {
      return error.response;
    }
  },
  setting: async ({ email, password, username, bio, image, token }) => {
    try {
      const body = {
        user: {
          email,
          username,
          password,
          bio,
          image,
        },
      };

      const response = await fetch(`${BASE_URL}/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token ' + token,
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
