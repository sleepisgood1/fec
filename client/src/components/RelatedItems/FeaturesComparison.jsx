import React from 'react';
import { useState, useEffect} from "react";
import Feature from './Feature.jsx'
import {Popup, ComparisonButton} from './../RelatedItems/RelatedItems.styled.js'


function FeaturesComparison (props) {
  const [comparisonClicked, setComparisonClicked] = useState(false);
  const featuresObj = {}

  var productFeatures = props.product.features.map((oneFeature)=>{
    if (!featuresObj[oneFeature.feature]) {
      featuresObj[oneFeature.feature] = {}
      featuresObj[oneFeature.feature].productValue = oneFeature.value
    } else {
      featuresObj[oneFeature.feature].productValue = oneFeature.value
    }
  })
  var relatedFeatures = props.curRelatedProduct.productInfo.features.map((oneFeature)=>{
    if (!featuresObj[oneFeature.feature]) {
      featuresObj[oneFeature.feature] = {}
      featuresObj[oneFeature.feature].relatedValue = oneFeature.value
    } else {
      featuresObj[oneFeature.feature].relatedValue = oneFeature.value
    }
  })

  var features = Object.keys(featuresObj)

  var conditionalRender = (
    <Popup>
      <table>
        <thead>
          <tr>
          <th>{props.product.name}</th><th></th><th>{props.curRelatedProduct.productInfo.name}</th></tr>
          </thead>
          {features.map((feature)=>{
            return(
            <Feature
            key={features.indexOf(feature)}
            feature={feature}
            featuresObj={featuresObj}
            />
            )
          })}
        <ComparisonButton onClick={()=>{
      console.log('clicked')
      setComparisonClicked(!comparisonClicked)
      }}>Close Comparison
      </ComparisonButton>
      </table>
    </Popup>
    )
  return (
    <div>
    {comparisonClicked ? conditionalRender : ''}
    <ComparisonButton onClick={()=>{
      console.log('clicked')
      setComparisonClicked(!comparisonClicked)
      }}>Open Comparison
      </ComparisonButton>
    </div>
  )
}

export default FeaturesComparison