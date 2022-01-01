import React from 'react';
import StarRating from './StarRating.jsx'
import FeaturesComparison from './FeaturesComparison.jsx'

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
  const averageRating = numberOfRatings ? rating/numberOfRatings : ""
  const priceRender = <li><a>{relatedItemSKUs[0].original_price}</a><b>{relatedItemSKUs[0].sale_price}</b></li>
  //technically onclick of the button, it should probably change the state of something in the top level?
  return (
    <ul>
      <img src={relatedItemSKUs[0].photos[0].thumbnail_url} onClick={()=>{
        console.log('clicked!')
        // props.history.push(props.relatedItem.results)
        console.log(props.product)
        }}/>
        <li>{productInfo.category}</li>
        <li>{expandedProductName}</li>
        {relatedItemSKUs[0].sale_price ? priceRender : relatedItemSKUs[0].original_price}
        <li>{averageRating}</li>
        <StarRating/>
        <FeaturesComparison product={props.product} curRelatedProduct={props.relatedItem}/>
        {/* <button onClick={}/> */}
    </ul>
  )
}
export default RelatedItem;
