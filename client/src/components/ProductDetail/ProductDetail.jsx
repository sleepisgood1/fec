import React from 'react';
const axios = require('axios');
const config = require('../../../../server/config/config.js');


class ProductDetail extends React.Component {
 constructor(props) {
   super(props)
 }


render() {

  return (
    <div>
    <div>{this.props.product.category}</div>
    <div className='product_name'>{this.props.product.name}</div>
    <div>{this.props.product.default_price}</div>
    </div>
  )
}
}

export default ProductDetail;