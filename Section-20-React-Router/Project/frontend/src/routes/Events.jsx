import React from 'react';
import { Link } from 'react-router-dom';

function EventsPage() {
  const DUMMY_EVENTS = [
    { id: 'e1', title: 'Event 1' },
    { id: 'e2', title: 'Event 2' },
    { id: 'e3', title: 'Event 3' },
    { id: 'e4', title: 'Event 4' },
  ];

  return (
    <ul>
      {DUMMY_EVENTS.map((event) => (
        <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default EventsPage;
