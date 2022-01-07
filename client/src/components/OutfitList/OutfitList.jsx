import React from 'react';
import { useState, useEffect } from "react";
import Outfit from './Outfit.jsx'
import {Container, ComparisonButton} from './../RelatedItems/RelatedItems.styled.js'
const axios = require('axios');

function OutfitList(props) {
  const [myOutfit, setMyOutfit] = useState([]);
  useEffect(()=>{
    axios.get(`/relateditems/outfits`, {
    })
      .then((response)=>{
        setMyOutfit(response.data)
      })
  }, [])

  const onAddToOutfitClick = (product) => {

    axios.get(`/relateditems/styles`, {
      params: {
        product_id: product.id
      }
    })
      .then((response)=>{

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
