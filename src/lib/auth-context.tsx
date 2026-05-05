'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '@/lib/axios';

interface User {
  id: string;
  email: string;
  role: string;
  emailVerified?: boolean;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  isLoginModalOpen: boolean;
  isSignupModalOpen: boolean;
  setLoginModalOpen: (open: boolean) => void;
  setSignupModalOpen: (open: boolean) => void;
  signup: (email: string, password: string) => Promise<string>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const getTokenFromCookie = () => {
    if (typeof window === 'undefined') return null;
    return document.cookie.split('; ').find((cookie) => cookie.startsWith('techexaToken='))?.split('=')[1] || null;
  };

  // Check if user is already logged in on mount
  useEffect(() => {
    const token = localStorage.getItem('techexaToken') || getTokenFromCookie();
    if (token) {
      setIsAuthenticated(true);
      fetchUserProfile();
    }
    setLoading(false);
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await api.get('/auth/profile');
      if (response.data.success) {
        setUser(response.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      // If profile fetch fails (e.g., expired token), log out
      logout();
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/signup', { email, password });
      if (response.data.success) {
        // Backend doesn't send token until email is verified
        // Just return successfully - user needs to verify email first
        return response.data.message || 'Account created successfully!';
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Signup failed');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.data.success) {
        const token = response.data.data?.token;
        if (token) {
          localStorage.setItem('techexaToken', token);
          if (typeof window !== 'undefined') {
            document.cookie = `techexaToken=${token}; path=/; secure; samesite=None;`;
          }
          setIsAuthenticated(true);
          setUser(response.data.data);
          setLoginModalOpen(false); // Close modal on success
        }
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('techexaToken');
    if (typeof window !== 'undefined') {
      document.cookie = 'techexaToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=None;';
    }
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      loading, 
      isLoginModalOpen, 
      isSignupModalOpen, 
      setLoginModalOpen, 
      setSignupModalOpen,
      signup, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
