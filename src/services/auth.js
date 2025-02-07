import api from './api';

export async function login(username, password) {
  try {
    const response = await api.post('/api/auth/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
}
