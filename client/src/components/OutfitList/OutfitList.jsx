import React from 'react';
import { useState, useEffect } from "react";
import Outfit from './Outfit.jsx'
const axios = require('axios');

function OutfitList(props) {
  const [myOutfit, setMyOutfit] = useState([]);
  // useEffect(()=>{
  // console.log(props.product)
  // }, myOutfit)
  const onAddToOutfitClick = (product) => {
    // console.log('clicked')
    //currently I'm just amkign another axios call but we could technically just have the productinfo data from productdetail's state raised to App.js and then either just both use them as props or make it into a react context.
    axios.get('http://localhost:3000/relateditems/styles', {
      params: {
        product_id: product.id
      }
    })
      .then((response)=>{
        console.log('response.data', response.data)
        var styles = response.data.results[0]
        var reviewMetadata = response.data.reviewMetadata
        var outfitProduct = props.product
        outfitProduct.style = response.data.results[0]
        outfitProduct.reviewMetadata = reviewMetadata
        var newOutfit = myOutfit.concat(outfitProduct)
        setMyOutfit(newOutfit)
      })
  }
  var addToOutfitButton = (<button onClick={(event)=>{
    event.preventDefault()
    onAddToOutfitClick(props.product)
  }}/>)

  return (
    <div>
      Your Outfit
      {myOutfit ? myOutfit.map((outfit)=>{
        return (
          <Outfit
          key={myOutfit.indexOf(outfit)}
          outfit={outfit}
          />
        )
      }) : ''}
      {addToOutfitButton}
    </div>
  )
}
export default OutfitList;
