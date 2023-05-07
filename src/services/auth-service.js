import axios from 'axios';
import authHeader from './auth-header';

const AUTH_URL = 'http://localhost:9000/auth';

class AuthService {
  async register(firstName, lastName, email, password) {
    return axios
      .post(`${AUTH_URL}/register`, {
        first_name: firstName,
        last_name: lastName,
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

  async login(email, password) {
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

  async me() {
    return axios.get(`${AUTH_URL}/me`, { headers: authHeader() });
  }

  logout() {
    sessionStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}

export default new AuthService();
