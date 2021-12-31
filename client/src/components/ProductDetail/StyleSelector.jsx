import React from 'react';
const axios = require('axios');
const config = require('../../../../server/config/config.js');
import styled, { css } from "styled-components";

const StyleCircles = styled.img`
  height: 50px;
  width: 50px;
  border: black solid 1px;
  border-radius: 50%;
  margin: 0.25rem
`;

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)
    this.selectStyle = this.selectStyle.bind(this);
  }

  selectStyle(event) {
    //console.log(event.target.id);
    this.props.handleStyle(event.target.id);

  }

  render() {
    return(
      <StyleCircles id={this.props.style.style_id} src={this.props.style.photos[0].thumbnail_url} onClick={this.selectStyle} ></StyleCircles>
    )
  }
}



export default StyleSelector;