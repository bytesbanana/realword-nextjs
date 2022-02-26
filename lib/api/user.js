const BASE_URL = process.env.API_BASE_URL;
const UserAPI = {
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
