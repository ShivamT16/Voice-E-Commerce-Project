import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (item) => {
    // setIsLoggedIn(!setIsLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
