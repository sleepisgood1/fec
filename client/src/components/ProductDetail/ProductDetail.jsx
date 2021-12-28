import React from 'react';

class ProductDetail extends React.Component {
 constructor(props) {
   super(props)
 }

render() {
  return (
    <div>{this.props.productId}</div>
  )
}
}

export default ProductDetail;