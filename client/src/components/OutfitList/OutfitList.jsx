import React from 'react';
import { useState, useEffect } from "react";
import Outfit from './Outfit.jsx'
import {Container, ComparisonButton} from './../RelatedItems/RelatedItems.styled.js'
const axios = require('axios');

function OutfitList(props) {
  const [myOutfit, setMyOutfit] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/relateditems/outfits', {
    })
      .then((response)=>{
        setMyOutfit(response.data)
      })
  }, [])

  const onAddToOutfitClick = (product) => {
    // console.log('clicked')
    //currently I'm just amkign another axios call but we could technically just have the productinfo data from productdetail's state raised to App.js and then either just both use them as props or make it into a react context.

    axios.get('http://localhost:3000/relateditems/styles', {
      params: {
        product_id: product.id
      }
    })
      .then((response)=>{
        // console.log('response.data', response.data)
        // console.log('props.product', props.product)
        // var styles = response.data.results[0]
        // var reviewMetadata = response.data.reviewMetadata
        // var outfitProduct = props.product
        // outfitProduct.style = response.data.results[0]
        // outfitProduct.reviewMetadata = reviewMetadata
        let length = response.data.length
        if (response.data[length-1].newProductAdded) {
          var newOutfit = myOutfit.concat(response.data)
          setMyOutfit(newOutfit)
        } else {
          console.log('no new Product was added due to product existing in outfit list!')
        }
      })
  }
  var addToOutfitButton = (<ComparisonButton onClick={(event)=>{
    event.preventDefault()
    onAddToOutfitClick(props.product)
  }}>Add To Outfit</ComparisonButton>)

  return (
    <Container>
      {myOutfit ? myOutfit.map((outfit)=>{
        return (
          <Outfit
          key={myOutfit.indexOf(outfit)}
          outfit={outfit}
          setMyOutfit={setMyOutfit}
          myOutfit={myOutfit}
          />
        )
      }) : ''}
      {addToOutfitButton}
    </Container>
  )
}
export default OutfitList;
