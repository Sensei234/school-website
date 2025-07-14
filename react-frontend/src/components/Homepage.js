import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ color: "#003366" }}>Welcome to Our School Portal</h2>
      <p style={{ lineHeight: 1.6 }}>
        This platform provides access to admissions, academic curriculum,
        event information, and more for students, teachers, and administrative staff.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h3>Quick Access</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <Link to="/admissions" style={linkStyle}>Admissions</Link>
          <Link to="/academics" style={linkStyle}>Academics</Link>
          <Link to="/events" style={linkStyle}>Events</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  padding: "0.7rem 1.2rem",
  backgroundColor: "#005599",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "4px",
  display: "inline-block",
  fontWeight: "500"
};

export default Homepage;
