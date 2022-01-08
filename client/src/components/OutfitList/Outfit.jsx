import React from 'react';
import StarRating from './../RelatedItems/StarRating.jsx'
import {Container} from './../RelatedItems/RelatedItems.styled.js'
import styled, { css } from "styled-components";
import {StyledCard, ComparisonButton} from './../RelatedItems/RelatedItems.styled.js'

//product={props.product}
// curRelatedProduct={props.curRelatedProduct}
function Outfit (props) {
  // console.log(props.outfit)
  const outfit = props.outfit


  const expandedProductName = '' + outfit.style.name + ' ' + outfit.name
  const price = outfit.style.sale_price ? outfit.style.sale_price : outfit.style.original_price
  //gonna get an array of items
  const rating = Object.entries(outfit.reviewMetadata.ratings).reduce((previousValue, currentValue)=>{
    var curTotal = Number(currentValue[0])*Number(currentValue[1])
    return previousValue + curTotal
  }, Number(0))
  const numberOfRatings = Object.values(outfit.reviewMetadata.ratings).reduce(
    (previousValue, currentValue) =>{
      return previousValue + Number(currentValue)
    }, Number(0))
  const averageRating = numberOfRatings ? rating/numberOfRatings : ""
  const priceRender = <li><a>{outfit.style.original_price}</a><b>{outfit.style.sale_price}</b></li>


  return (
    <StyledCard>
      <img src={outfit.style.photos[0].thumbnail_url} onClick={()=>{
        console.log('clicked!')


        }}/>
        <p>{outfit.category}</p>
        <h5>{expandedProductName}</h5><p>
        {outfit.style.sale_price ? priceRender : outfit.style.original_price}</p>
        <p>{averageRating}</p>
        <StarRating/>
        <ComparisonButton onClick={(event)=>{
          event.preventDefault()
          console.log(event)
        }}>Remove From Outfit</ComparisonButton>

    </StyledCard>
  )
}

export default Outfit