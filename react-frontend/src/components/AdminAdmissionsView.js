import React, { useEffect, useState } from "react";
import "./AdminAdmissionsView.css";

function AdminAdmissionsView() {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    fetch("/api/admissions")
      .then((res) => res.json())
      .then((data) => setAdmissions(data));
  }, []);

  return (
    <div className="admin-view-container">
      <h2>Submitted Admissions</h2>
      {admissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table className="admissions-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Class</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((entry, index) => (
              <tr key={index}>
                <td>{entry.fullName}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.classToApply}</td>
                <td>{entry.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminAdmissionsView;
