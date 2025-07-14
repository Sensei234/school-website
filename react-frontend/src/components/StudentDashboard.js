import React, { useEffect, useState } from "react";

function StudentDashboard({ username }) {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetch(`/api/marks/${username}`)
      .then(res => res.json())
      .then(data => setMarks(data));
  }, [username]);

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>My Marks</h2>
      {marks.length === 0 ? (
        <p>No marks found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Subject</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Marks</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((entry, i) => (
              <tr key={i}>
                <td style={{ padding: "8px 0" }}>{entry.subject}</td>
                <td style={{ padding: "8px 0" }}>{entry.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentDashboard;
