import React from 'react';
const axios = require('axios');
const config = require('../../../../server/config/config.js');
import styled, { css } from "styled-components"

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    //let total = Math.min(this.props.sku.quantity, 15)
    //console.log(this.props.sku.quantity)
    return (
      <option>{this.props.id}</option>
    );
  }
}

export default QuantitySelector;