import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ nodes }) => {
  return (
    <div>
      {
        nodes.map(
          n => <EventListItem node={n} key={n.id} />
        )
      }
    </div>
  );
}

export default EventList;
