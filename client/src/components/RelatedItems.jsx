import React from 'react';
import RelatedItem from './RelatedItem.jsx'

function RelatedItems(props) {
  
  //gonna get an array of items
  return (
    <div>
      {props.relatedItems.map((item)=>{
        return (
          <RelatedItem relatedItem={item}/>
        )
      })}
    </div>
  )
}
export default RelatedItems;
