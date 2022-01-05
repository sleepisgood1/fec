import React from 'react';
const axios = require('axios');
const config = require('../../../../server/config/config.js');
import styled, { css } from "styled-components"

class SizeSelector extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    //console.log(this.props);
    return (
      <option id={Number(this.props.id)} name={Number(this.props.id)} value={this.props.sku.size}>{this.props.sku.size}</option>
    );
  }
}

export default SizeSelector;