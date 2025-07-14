import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetch("/api/marks/summary")
      .then(res => res.json())
      .then(data => setSummary(data.subjects || {}));
  }, []);

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <h2>Performance Summary</h2>
      {Object.keys(summary).length === 0 ? (
        <p>No marks data available.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Avg</th>
              <th>Highest</th>
              <th>Lowest</th>
              <th># Students</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(summary).map(([subject, data]) => (
              <tr key={subject}>
                <td>{subject}</td>
                <td>{data.average}</td>
                <td>{data.highest}</td>
                <td>{data.lowest}</td>
                <td>{data.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;
