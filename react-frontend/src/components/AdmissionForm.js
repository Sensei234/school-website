import React, { useState } from "react";
import "./AdmissionForm.css";

function AdmissionForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    classToApply: "",
    marks: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/admissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message || "Form submitted successfully.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          classToApply: "",
          marks: ""
        });
      });
  };

  return (
    <div className="form-container">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit} className="admission-form">
        <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
        <input name="classToApply" value={formData.classToApply} onChange={handleChange} placeholder="Class to Apply" />
        <input name="marks" value={formData.marks} onChange={handleChange} placeholder="Previous Marks" />
        <button type="submit">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default AdmissionForm;
