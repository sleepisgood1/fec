import React from 'react';
const axios = require('axios');
const config = require('../../../../server/config/config.js');


class ProductDetail extends React.Component {
 constructor(props) {
   super(props)
 }


render() {
  console.log(this.props.product)
  return (
    <div>{this.props.productId}</div>
  )
}
}

export default ProductDetail;