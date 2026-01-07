import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://mythica-jewels-backend.onrender.com/api';

type User = {
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
  [k: string]: any;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signin: (email: string, password: string) => Promise<any>;
  signup: (name: string, email: string, password: string) => Promise<any>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

const apiCall = async (endpoint: string, options: any = {}) => {
  const token = await AsyncStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  let data;
  try {
    data = await res.json();
  } catch (err) {
    throw new Error('Invalid server response');
  }

  if (!res.ok) {
    throw new Error(data?.message || 'Something went wrong');
  }

  return data;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restore = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userStr = await AsyncStorage.getItem('user');
        if (token && userStr) {
          try {
            const parsed = JSON.parse(userStr);
            setUser(parsed);
          } catch {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('user');
            setUser(null);
          }
        }
      } catch (err) {
        console.warn('Failed to restore auth', err);
      } finally {
        setLoading(false);
      }
    };
    restore();
  }, []);

  const signup = async (name: string, email: string, password: string) => {
    const data = await apiCall('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });

    if (data.token) {
      await AsyncStorage.setItem('token', data.token);
      const userData = data.user || (data.userId ? { _id: data.userId, name, email } : null);
      if (userData) {
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      }

      return data;
    }

    throw new Error('Invalid signup response');
  };

  const signin = async (email: string, password: string) => {
    const data = await apiCall('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (data.token) {
      await AsyncStorage.setItem('token', data.token);

      if (data.user) {
        await AsyncStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
      } else {
        try {
          const profile = await apiCall('/auth/profile', { headers: { Authorization: `Bearer ${data.token}` } });
          await AsyncStorage.setItem('user', JSON.stringify(profile.user || profile));
          setUser(profile.user || profile);
        } catch (err) {
          const minimal = { email, name: email.split('@')[0] };
          await AsyncStorage.setItem('user', JSON.stringify(minimal));
          setUser(minimal);
        }
      }

      return data;
    }

    throw new Error('Invalid signin response');
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { apiCall };
