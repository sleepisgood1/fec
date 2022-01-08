import React from 'react';
import {ComparisonContainerCardBody, ComparisonFeatures, checks} from './../RelatedItems/RelatedItems.styled.js'

function Feature (props) {
  return (
    <tbody>
      <tr>
    <td>{props.featuresObj[props.feature].productValue}</td><td>{props.feature}</td><td>{props.featuresObj[props.feature].relatedValue}</td>
    </tr>
    </tbody>
  )
}

export default Feature