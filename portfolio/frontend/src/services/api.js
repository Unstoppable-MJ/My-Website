import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
});

export const getGithubData = () => api.get('/github');
export const sendContactMessage = (data) => api.post('/contact', data);

export default api;
