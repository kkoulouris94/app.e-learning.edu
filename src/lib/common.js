import axios from 'axios';

export function storeTokenInSessionStorage(token) {
  sessionStorage.setItem('token', token);
}

export function getTokenFromSessionStorage() {
  return sessionStorage.getItem('token');
}

export async function getAuthenticatedUser() {
  const response = {
    info: null,
  };

  try {
    const token = getTokenFromSessionStorage();
    if (!token) {
      return response;
    }
    const serverResponse = await axios({
      method: 'GET',
      url: 'http://localhost:9000/auth/me',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { info = false } = serverResponse.data.data;
    return info ? serverResponse.data.data : false;
  } catch (err) {
    console.log('getAuthenticatedUser, Something Went Wrong', err);
    return response;
  }
}
