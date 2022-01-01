import React from 'react';
import RelatedItem from './RelatedItem.jsx'

function RelatedItems(props) {

  //gonna get an array of items
  return (
    <div>
      Related Items
      {props.relatedItems.map((item)=>{
        return (
          <RelatedItem key={item.product_id} relatedItem={item} product={props.product}/>
        )
      })}
    </div>
  )
}
export default RelatedItems;
