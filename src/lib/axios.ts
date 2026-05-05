import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://khanwebbackend.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const parseCookieValue = (name: string) => {
  if (typeof window === 'undefined') return null;
  return document.cookie.split('; ').find((cookie) => cookie.startsWith(`${name}=`))?.split('=')[1] || null;
};

// Interceptor to add auth token if available
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('techexaToken') || parseCookieValue('techexaToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Interceptor to handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('techexaToken');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
