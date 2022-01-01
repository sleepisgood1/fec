import React from 'react';
import { useState, useEffect} from "react";
import Feature from './Feature.jsx'
function FeaturesComparison (props) {
  const [comparisonClicked, setComparisonClicked] = useState(false);
  // const [featuresObj, setFeaturesObj] = useState({})
  // useEffect(()=>{

  // }, )
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
  // console.log(featuresObj)
  // var unique = new Set(productFeatures.concat(relatedFeatures))
  var features = Object.keys(featuresObj)

  var conditionalRender = (<div>
      Comparing
      <li>{props.product.name}</li><li></li><li>{props.curRelatedProduct.productInfo.name}</li>
      {features.map((feature)=>{
        return(
        <Feature
        key={features.indexOf(feature)}
        feature={feature}
        featuresObj={featuresObj}
        />
        )
      })}
    </div>)
  return (
    <div>
    {!comparisonClicked ? <button onClick={()=>{setComparisonClicked(true)}}/> : conditionalRender}
    </div>
  )
}

export default FeaturesComparison