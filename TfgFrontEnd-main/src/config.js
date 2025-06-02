// Configuración centralizada de la aplicación

// URL de la API
export const API_URL = import.meta.env.VITE_API_URL || 'https://vivius-backend.onrender.com';

// URL del backend para imágenes y recursos
export const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://vivius-backend.onrender.com';

// Configuración de timeout para peticiones (en ms)
export const API_TIMEOUT = 30000;

// Versión de la aplicación
export const APP_VERSION = '1.0.0';

// Entorno (development, production)
export const ENV = import.meta.env.MODE || 'production';

// Función para construir URLs completas para imágenes
export function getImageUrl(path) {
    if (!path) return '/sinFondo.png'; // Imagen por defecto
    if (path.startsWith('http')) return path;
    // Usa la URL base del backend desplegado
    return `${BACKEND_URL}${path}`;
}
