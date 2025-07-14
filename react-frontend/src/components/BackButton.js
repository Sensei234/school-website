import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on the login page
  if (location.pathname === "/login") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        margin: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#444",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >
      ← Back
    </button>
  );
}

export default BackButton;
