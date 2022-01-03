import React from 'react';
import StarRating from './StarRating.jsx'
import FeaturesComparison from './FeaturesComparison.jsx'
import styled, { css } from "styled-components";
import {Price, ProductName, Category, Sale, Stars, Details, StyledCard} from './RelatedItems.styled.js'


function RelatedItem(props) {
//   const StyledCard = styled.div`
//   overflow:hidden;
//   box-shadow: 0 2px 20 px $clr-gray300;
//   border-radius:$radius;
//   display:flex;
//   flex-direction:column;
//   justify-content:space-between;
//   cursor:pointer;
//   transition:transform 200ms ease-in;
// `;




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
  const averageRating = numberOfRatings ? rating/numberOfRatings : ""
  const priceRender = <p><s>{relatedItemSKUs[0].original_price}</s><b>{relatedItemSKUs[0].sale_price}</b></p>
  // console.log(StyledCard)
  const image = relatedItemSKUs[0].photos[0].thumbnail_url ? relatedItemSKUs[0].photos[0].thumbnail_url : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
  //technically onclick of the button, it should probably change the state of something in the top level?
  return (
    <StyledCard>
      <img src={image} onClick={()=>{
        console.log('clicked!')
        // props.history.push(props.relatedItem.results)
        console.log(props.product)
        }}/>
        <p>{productInfo.category}</p>
        <h5>{expandedProductName}</h5>
        <p>
        {relatedItemSKUs[0].sale_price ? priceRender : relatedItemSKUs[0].original_price}</p>
        <p>{averageRating}</p>
        <StarRating/>
        <FeaturesComparison product={props.product} curRelatedProduct={props.relatedItem}/>
        {/* <button onClick={}/> */}
    </StyledCard>
  )
}
export default RelatedItem;
