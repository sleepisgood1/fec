import React from 'react';

//product={props.product}
// curRelatedProduct={props.curRelatedProduct}
function Feature (props) {
  return (
    <div>
    <li>{props.featuresObj[props.feature].productValue}</li><li>{props.feature}</li><li>{props.featuresObj[props.feature].relatedValue}</li>
    </div>
  )
}

export default Feature