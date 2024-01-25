import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => null,
});

export const AuthProvider = ({ children }) => {
  // use state to check if a user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // get the login session from localstorage
    const session = JSON.parse(localStorage.getItem("session"));

    console.log(session);

    // if session exists set authenticated to true
    if (session) {
      // check if token is valid
      setIsAuthenticated(true);
    }
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
