// src/api/axios.ts
import axios from 'axios';

// Ajuste a URL base para o seu servidor backend
const api = axios.create({
    baseURL: 'http://localhost:8080/api',  // Ajuste conforme a URL do seu backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
