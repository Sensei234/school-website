import React, { useState } from "react";

function TeacherDashboard() {
  const [formData, setFormData] = useState({
    username: "",
    subject: "",
    marks: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/marks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, marks: Number(formData.marks) })
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message || "Saved.");
        setFormData({ username: "", subject: "", marks: "" });
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <h2>Enter Marks</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input name="username" placeholder="Student Username" value={formData.username} onChange={handleChange} required />
        <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <input name="marks" type="number" placeholder="Marks" value={formData.marks} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

export default TeacherDashboard;
