import React from 'react';

export const EventPage = (props) => {
  return (
    <div>
      <h2>
        Event
      </h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
