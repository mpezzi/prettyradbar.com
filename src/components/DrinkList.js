import React from 'react';
import DrinkListItem from './DrinkListItem';

const DrinkList = ({ nodes }) => {
  return (
    <div>
      {
        nodes.map(
          n => <DrinkListItem node={n} key={n.id} />
        )
      }
    </div>
  );
}

export default DrinkList;
