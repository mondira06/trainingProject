import React, { useState, useEffect, createContext, useContext } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));

  useEffect(() => {
    if (Cookies.get('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    Cookies.set('token', token, { expires: 1 });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);