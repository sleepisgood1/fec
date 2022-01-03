import React from 'react';
import RelatedItem from './RelatedItem.jsx'
import {Container} from './RelatedItems.styled.js'

function RelatedItems(props) {

  //gonna get an array of items
  return (
    <Container>
      {props.relatedItems.map((item)=>{
        return (
          <RelatedItem key={item.product_id} relatedItem={item} product={props.product}/>
        )
      })}
    </Container>
  )
}
export default RelatedItems;
