import React from 'react';
import RelatedItem from './RelatedItem.jsx'
import {Container} from './RelatedItems.styled.js'
import { useRef, useState, useEffect } from "react";
import {ComparisonButton} from './../RelatedItems/RelatedItems.styled.js'

function RelatedItems(props) {
  const [currIndex, setCurrIndex] = useState(0)
  var allRelated = props.relatedItems.concat(props.relatedItems)
  var listOfFour = allRelated.slice(currIndex%4, (currIndex%4)+4)


    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          console.log(e.deltaY)
          if (e.deltaY<0) {
            setCurrIndex(currIndex - Math.ceil(e.deltaY/30))
          } else if (e.deltaY>0) {
            setCurrIndex(currIndex + Math.ceil(e.deltaY/30))
          }

          if (e.deltaY == 0) return;
          // e.preventDefault();

        };
        el.addEventListener("wheel", onWheel, {passive: true});
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);

  return (
    <Container
    ref={elRef} style={{overflow: "auto" }}>
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
