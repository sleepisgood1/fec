import React from 'react';
import StarRating from './StarRating.jsx'
import FeaturesComparison from './FeaturesComparison.jsx'
import styled, { css } from "styled-components";
import {Price, ProductName, Category, Sale, Stars, Details, StyledCard} from './RelatedItems.styled.js'
import { Routes, Route, Redirect, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";

function RelatedItem(props) {

  const relatedItemSKUs = props.relatedItem.results
  const reviewData = props.relatedItem.reviewMetadata
  const productInfo = props.relatedItem.productInfo
  const expandedProductName = '' + relatedItemSKUs[0].name + ' ' + productInfo.name
  const price = relatedItemSKUs[0].sale_price ? relatedItemSKUs[0].sale_price : relatedItemSKUs[0].original_price
  //gonna get an array of items
  const rating = Object.entries(reviewData.ratings).reduce((previousValue, currentValue)=>{
    var curTotal = Number(currentValue[0])*Number(currentValue[1])
    return previousValue + curTotal
  }, Number(0))
  const numberOfRatings = Object.values(reviewData.ratings).reduce(
    (previousValue, currentValue) =>{
      return previousValue + Number(currentValue)
    }, Number(0))
  const averageRating = numberOfRatings ? (Math.round((rating/numberOfRatings)*4)/4) : ""
  const priceRender = <p><s>{relatedItemSKUs[0].original_price}</s><b>${relatedItemSKUs[0].sale_price}</b></p>
  // console.log(StyledCard)
  const image = relatedItemSKUs[0].photos[0].thumbnail_url ? relatedItemSKUs[0].photos[0].thumbnail_url : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"

  // console.log(props.relatedItem.productInfo.id)
  //technically onclick of the button, it should probably change the state of something in the top level?
  // const history = useHistory()
  // const redirectRoute = `/${props.relatedItem.productInfo.id}`
  // const [redirectTo, setRedirectTo] = useState(false)
  //   if (redirectTo) {
  //     return <Redirect to={`/`} />
  //   }
  var host = "http://54.183.148.200"
    return (
      <StyledCard>
        <a href={`${host}/${props.relatedItem.productInfo.id}`}>
        <img src={image} onClick={()=>{
          // setRedirectTo(true)
          // history.push('../')
          }}/>
          </a>
          <p>{productInfo.category}</p>
          <h5>{expandedProductName}</h5>
          <p>$
          {relatedItemSKUs[0].sale_price ? priceRender : relatedItemSKUs[0].original_price}</p>
          <p>*{averageRating ? averageRating : "No rating available"}</p>
          <StarRating/>
          <FeaturesComparison product={props.product} curRelatedProduct={props.relatedItem}/>
          {/* <button onClick={}/> */}
      </StyledCard>
    )
}
export default RelatedItem;
