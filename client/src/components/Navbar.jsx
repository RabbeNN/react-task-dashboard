import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useTheme } from "../context/useTheme";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem",
        background: "var(--card-bg)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link to="/dashboard" style={{ marginRight: "10px" }}>
          Dashboard
        </Link>
        <Link to="/tasks" style={{ marginRight: "10px" }}>
          Tasks
        </Link>
        <Link to="/tasks/new">New Task</Link>
      </div>

      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: "var(--btn-bg)",
          color: "var(--btn-text)",
          border: "none",
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div>{user && <button onClick={logout}>Logout</button>}</div>
    </nav>
  );
}
