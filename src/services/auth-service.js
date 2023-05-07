import axios from 'axios';

const AUTH_URL = 'http://localhost:9000/auth';

class AuthService {
  login(email, password) {
    return axios
      .post(`${AUTH_URL}/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.data.access_token) {
          sessionStorage.setItem('user', JSON.stringify(response.data.data));
        }

        return response.data.data;
      });
  }

  logout() {
    sessionStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}

export default new AuthService();
