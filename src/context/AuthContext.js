import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

// Create context for authentication
export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => null,
  logout: () => null,
});

// Authentication Provider component
export const AuthProvider = ({ children }) => {
  // State for authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // State for user details
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get session from local storage
    const session = JSON.parse(localStorage.getItem("session"));

    // if session exists, set authenticated to true
    if (session) {
      // 1. check if refresh token is valid
      const decoded = jwtDecode(session.refresh_token);
      const expiry = dayjs(decoded.exp * 1000);
      const isValid = dayjs().isBefore(expiry);

      if (isValid) {
        // Set user details and authenticate
        setUser(session.user);
        setIsAuthenticated(true);
      } else {
        // Logout if refresh token is invalid
        logout();
      }
    }
  }, []);

  // Logout function
  const logout = () => {
    // remove session from localstorage
    localStorage.removeItem("session");
    // reset isAuthenticated state
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
