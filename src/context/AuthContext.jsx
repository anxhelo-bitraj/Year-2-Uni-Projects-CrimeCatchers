import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("userInfo");
    const token = localStorage.getItem("jwtToken");
    return stored && token ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user));
    } else {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("jwtToken");
    }
  }, [user]);

  // login now accepts user fields and token
  const login = ({ user, token }) => {
    setUser(user);
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("userInfo", JSON.stringify(user));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userInfo");
  };

  // Fetch user profile from backend using JWT on app load
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token && !user) {
      fetch("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.ok ? res.json() : null)
        .then((profile) => {
          if (profile) setUser(profile);
        });
    }
    // eslint-disable-next-line
  }, []);

  // Update profile in backend and state
  const updateProfile = async (fields) => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;
    const res = await fetch("/api/auth/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(fields),
    });
    if (res.ok) {
      const updated = await res.json();
      setUser(updated);
      localStorage.setItem("userInfo", JSON.stringify(updated));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
