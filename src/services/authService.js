
import axios from 'axios';
const API_URL = 'https://study-mart-backend.vercel.app';

// Login API
export const loginUserAPI = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data.result;
};

// Signup API
export const signupUserAPI = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data.result;
};