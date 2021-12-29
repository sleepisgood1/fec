import React from 'react';
const axios = require('axios');
const config = require('../../../../server/config/config.js');
import styled, { css } from "styled-components"

const Button = styled.button`
  background: white;
  border: black 1px solid;
  font-family: adobe-clean, sans-serif;
  width: 70%;
  height: 3rem;
  margin: 3rem 0.25rem 0rem 0.25rem;
`;

const QuantityButton = styled.button`
  background: white;
  border: black 1px solid;
  font-family: adobe-clean, sans-serif;
  width: 20%;
  height: 3rem;
  margin: 3rem 0.25rem 0rem 0.25rem;
`;

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
      <div>
      <Button>SELECT SIZE</Button>
      <QuantityButton>1</QuantityButton>
      </div>
      <div>
      <Button>Add to Bag</Button>
      </div>
      </div>
    )
  }
}


export default Cart;



