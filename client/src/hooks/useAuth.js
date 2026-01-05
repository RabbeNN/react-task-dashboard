import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const navigate = useNavigate();

  const login = (name) => {
    localStorage.setItem("user", name);
    setUser(name);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return { user, login, logout };
}
