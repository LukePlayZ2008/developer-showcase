import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

// Hardcoded credentials
const ADMIN_USERNAME = "CodebyLuke";
const ADMIN_PASSWORD = "Theint2009";

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("adminAuth") === "true";
  });

  useEffect(() => {
    if (isAuthenticated) {
      sessionStorage.setItem("adminAuth", "true");
    } else {
      sessionStorage.removeItem("adminAuth");
    }
  }, [isAuthenticated]);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
};
