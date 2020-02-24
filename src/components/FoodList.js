import React from 'react';
import FoodListItem from './FoodListItem';

const FoodList = ({ nodes }) => {
  return (
    <div>
      {
        nodes.map(
          n => <FoodListItem node={n} key={n.id} />
        )
      }
    </div>
  );
}

export default FoodList;
