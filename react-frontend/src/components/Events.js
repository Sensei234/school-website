import React, { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "2rem auto", padding: "1rem" }}>
      <h2>School Events</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
        {events.map((event, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", background: "#fff" }}>
            <img src={event.image} alt={event.title} style={{ width: "100%", borderRadius: "6px" }} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
