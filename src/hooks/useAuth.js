import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate();

    // Initialize auth state from localStorage
    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            try {
                setAuth(JSON.parse(storedAuth));
            } catch (error) {
                localStorage.removeItem('auth');
                console.error('Failed to parse auth from localStorage:', error);
            }
        }
    }, []);

    // Persist auth to localStorage when it changes
    useEffect(() => {
        if (auth) {
            localStorage.setItem('auth', JSON.stringify(auth));
        } else {
            localStorage.removeItem('auth');
        }
    }, [auth]);

    // Set up axios interceptors for token refresh
    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            config => {
                if (auth?.accessToken) {
                    config.headers.Authorization = `Bearer ${auth.accessToken}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );

        const responseInterceptor = axios.interceptors.response.use(
            response => response,
            async error => {
                const originalRequest = error.config;
                
                // If error is 401 and we haven't already tried to refresh
                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    
                    try {
                        const response = await axios.post('/api/auth/refresh-token', {}, {
                            withCredentials: true
                        });
                        
                        const newAccessToken = response.data.accessToken;
                        setAuth(prev => ({
                            ...prev,
                            accessToken: newAccessToken
                        }));
                        
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return axios(originalRequest);
                    } catch (refreshError) {
                        // Refresh failed - log user out
                        setAuth(null);
                        navigate('/login');
                        return Promise.reject(refreshError);
                    }
                }
                
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, [auth, navigate]);

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout', {}, {
                withCredentials: true
            });
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            setAuth(null);
            navigate('/login');
        }
    };


    // In hooks/useAuth.js
    const refreshAuth = async () => {
        try {
          const response = await axios.post('/api/auth/refresh-token', {}, {
            withCredentials: true
          });

          setAuth(prev => ({
            user: prev.user,
            accessToken: response.data.accessToken
          }));
          return true;
        } catch (error) {
          console.error('Failed to refresh auth:', error);
          logout();
          return false;
        }
      };
  
  // Add to your return statement
  return { auth, setAuth, logout, refreshAuth };

    // return { auth, setAuth, logout };
}