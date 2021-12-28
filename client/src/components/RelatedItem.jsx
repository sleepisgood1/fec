import React from 'react';

function RelatedItem(props) {
  //gonna get an array of items
  return (
    <ul>
      <span>{props.relatedItem.results.name}</span>
    </ul>
  )
}
export default RelatedItem;
