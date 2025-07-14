import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Layout({ user, onLogout, children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const showBack = location.pathname !== "/login";

  const navStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "500"
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <header style={{
        backgroundColor: "#003366",
        color: "#fff",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0 }}>School Website</h2>
        {user && (
          <div>
            <span style={{ marginRight: "1rem" }}>{user.username} ({user.role})</span>
            <LogoutButton onLogout={onLogout} />
          </div>
        )}
      </header>

      {user && (
        <nav style={{ backgroundColor: "#005599", padding: "0.5rem 2rem" }}>
          {user.role === "admin" && (
            <>
              <a href="/admin" style={navStyle}>Admin Panel</a>
              <a href="/events" style={navStyle}>Events</a>
              <a href="/academics" style={navStyle}>Academics</a>
              <a href="/admissions" style={navStyle}>Admissions</a>
            </>
          )}
          {user.role === "teacher" && (
            <a href="/teacher" style={navStyle}>Teacher Dashboard</a>
          )}
          {user.role === "student" && (
            <a href="/student" style={navStyle}>Student Dashboard</a>
          )}
        </nav>
      )}

      {showBack && (
        <div style={{ padding: "1rem 2rem" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "0.4rem 0.9rem",
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            ← Back
          </button>
        </div>
      )}

      <main style={{ padding: "1rem 2rem" }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
