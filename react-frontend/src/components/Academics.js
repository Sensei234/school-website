import React, { useEffect, useState } from "react";

function Academics() {
  const [data, setData] = useState({ classes: [], faculty: [] });

  useEffect(() => {
    fetch("/api/academics")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Academics</h2>

      <section>
        <h3>Curriculum</h3>
        {data.classes.map((item, i) => (
          <div key={i} style={{ marginBottom: "1rem" }}>
            <strong>{item.class}:</strong>
            <ul>
              {item.subjects.map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Faculty</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Name</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Subject</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Experience</th>
            </tr>
          </thead>
          <tbody>
            {data.faculty.map((f, i) => (
              <tr key={i}>
                <td>{f.name}</td>
                <td>{f.subject}</td>
                <td>{f.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Academics;
