import axios from 'axios';

// Get API base URL from environment variable
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to attach JWT token to requests
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Auth endpoints
export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (credentials) => api.post('/auth/login', credentials);

// Art endpoints
export const mintArt = (formData) => api.post('/art/mint', formData, {
    headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
    },
});
export const getMyArt = () => api.get('/art/my-art');
export const getArtById = (id) => api.get(`/art/${id}`);

// Gallery endpoints
export const getGalleryArt = () => api.get('/gallery');
export const likeArt = (artId) => api.post(`/gallery/${artId}/like`);
export const unlikeArt = (artId) => api.post(`/gallery/${artId}/unlike`);

export default api;