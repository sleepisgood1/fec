import React from 'react';
import RelatedItem from './RelatedItem.jsx'
import {Container} from './RelatedItems.styled.js'
import { useState, useEffect } from "react";
import {ComparisonButton} from './../RelatedItems/RelatedItems.styled.js'

function RelatedItems(props) {
  const [currIndex, setCurrIndex] = useState(0)
  var allRelated = props.relatedItems.concat(props.relatedItems)
  var listOfFour = allRelated.slice(currIndex%4, (currIndex%4)+4)
  //gonna get an array of items
  return (
    <Container>
      <ComparisonButton onClick={(event)=>{
        event.preventDefault()
        if (currIndex===0) {
          setCurrIndex(props.relatedItems.length-1)
        } else {
          setCurrIndex(currIndex-1)
          }
      }}>Go back</ComparisonButton>
      {listOfFour.map((item)=>{
        return (
          <RelatedItem key={item.product_id} relatedItem={item} product={props.product}/>
        )
      })}
      <ComparisonButton onClick={(event)=>{
        event.preventDefault()
          setCurrIndex(currIndex+1)
      }}>More</ComparisonButton>
    </Container>
  )
}
export default RelatedItems;
