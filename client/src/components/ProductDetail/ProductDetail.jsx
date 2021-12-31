import React from 'react';
const axios = require('axios');
const config = require('../../../../server/config/config.js');
import styled, { css } from "styled-components";
import StyleSelector from './StyleSelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 0.2fr 1fr 0.5fr 1fr;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "main main main selector"
    "desc desc desc desc2"
    "footer footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "selector"
      "main"
      "content"
      "footer"
      "desc"
      "desc2";
  }
  color: white;
`;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const NavBar = styled.nav`
  background: white;
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
  background: #D3D3D3;
  color: white;
  grid-area: main;
  padding: 0.25rem;
  border: 1px black solid;

`;
const Selector = styled.div`
  background: white;
  grid-area: selector;
  padding: 0.25rem;
  text-align: left;
  font-family: Helvetica, Arial, Sans-Serif;
  color: black;
`;

const Description2 = styled.div`
  background: white;
  padding: 0.25rem;
  grid-area: desc2;
`;

const Description = styled.div`
  background: white;
  grid-area: desc;
  padding: 0.25rem;
`;

const Category = styled.div`
  font-family: adobe-clean, sans-serif;
  font-size: 0.9rem;
  color: #A9A9A9;
  padding: 0.25rem;
`;

const Name = styled.div`
  font-family: adobe-clean, sans-serif;
  font-size: 1.2rem;
  padding: 0.25rem;
  font-weight: bold;
`;



const DescriptTxt = styled.div`
  font-family: adobe-clean, sans-serif;
  padding: 0.3rem 0.25rem 3rem 0.25rem;
  color: #A9A9A9;
  font-size: 0.9rem;
  text-align: left;
`;

const Slogan = styled.div`
  font-family: adobe-clean, sans-serif;
  padding: 3rem 0.25rem 0.3rem 0.25rem;
  font-weight: bold;
  color: black;
  text-align: left;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  max-width: 600px;
  max-height: 500px;
`;

const StyleCircles = styled.img`

  height: 50px;
  width: 50px;
  border: black solid 1px;
  border-radius: 50%
`;



const QuantityPicker = styled.div`
  font-family: adobe-clean, sans-serif;
  padding: 3rem 0.25rem 1rem 0.25rem;
  font-weight: regular;
  font-size: 0.9rem;
  color: #A9A9A9;
  text-align: left;
`;

const AddtoCart = styled.div`
  font-family: adobe-clean, sans-serif;
  padding: 3rem 0.25rem 1rem 0.25rem;
  font-weight: regular;
  font-size: 0.9rem;
  color: #A9A9A9;
  text-align: left;
`;

const Price = styled.div`
  font-family: adobe-clean, sans-serif;
  font-size: 0.9rem;
  color: #A9A9A9;
  padding: 0.25rem;
`;

const StylesHeader = styled.div`
  font-family: adobe-clean, sans-serif;
  padding: 3rem 0.25rem 1rem 0.25rem;
  font-weight: regular;
  font-size: 0.9rem;
  color: black;
  text-align: left;
`;

const SizeSelect = styled.select`
  background: white;
  border: black 1px solid;
  font-family: adobe-clean, sans-serif;
  width: 70%;
  height: 3rem;
  margin: 3rem 0.25rem 0rem 0.25rem;
`;

const Button = styled.button`
  background: white;
  border: black 1px solid;
  font-family: adobe-clean, sans-serif;
  width: 70%;
  height: 3rem;
  margin: 3rem 0.25rem 0rem 0.25rem;
`;

const QuantitySelect = styled.select`
  background: white;
  border: black 1px solid;
  font-family: adobe-clean, sans-serif;
  width: 20%;
  height: 3rem;
  margin: 3rem 0.25rem 0rem 0.25rem;
`;


class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: [],
      currStyleId: undefined,
      currSku: null
    }

    this.pickStyle = this.pickStyle.bind(this);
    this.changeSize = this.changeSize.bind(this);
  }

  componentDidMount() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${this.props.productId}/styles`, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
      .then((results) => {
        this.setState({
          styles: results.data.results,
          currStyleId: results.data.results[0].style_id
        })
        // console.log(this.state.styles)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  pickStyle(style_id) {
    this.setState({
      currStyleId: style_id
    })
  }

  changeSize() {
    let selectedSku = document.getElementById("sizeSelector").value;
    // console.log(selectedSku);
    this.setState({
      currSku: selectedSku
    })
  }

  render() {
    if (Object.keys(this.state.styles).length === 0) {
      return null;
    }

    const stylesArr = [];
    this.state.styles.forEach((style) => {
      //console.log(phrase);
      stylesArr.push(
        <StyleSelector
          style={style}
          handleStyle={this.pickStyle}
          key={style.style_id} />
      );
    })
    //console.log(this.state.currStyleId);
    let idx = this.state.styles.findIndex(x => x.style_id === Number(this.state.currStyleId))
    let index;
    if (idx !== -1) {
      index = idx
    } else {
      index = 0
    }

    let mainPrice;
    let mainSrc = this.state.styles[index].photos[0].url
    let mainStyle = this.state.styles[index].name
    if (this.state.styles[index].sale_price) {
      mainPrice = this.state.styles[index].sale_price + " (On Sale! Regular Price: $" + this.state.styles[index].original_price + ")";
    } else {
      mainPrice = this.state.styles[index].original_price
    }

    let style = this.state.styles[index]
    const sizeArr = [];
    Object.keys(style.skus)
      .forEach((key) => {
        //console.log(phrase);
        // console.log(key)
        // console.log(typeof key)
        sizeArr.push(
          <SizeSelector
            sku={style.skus[key]}
            id={key}
            key={key} />
        );
      })

    const quantityArr = [];
    let stateSku = this.state.currSku
    let relSku;
    if (stateSku !== null) {
      relSku = this.state.currSku
      // console.log(relSku)
    } else {
      relSku = Object.keys(style.skus)[0]
      // console.log(style.skus);
      // console.log(relSku);
    }
    let N = Math.min(15, style.skus[relSku].quantity)
    for (var i = 1; i <= N; i++) {
      quantityArr.push(
        <QuantitySelector
            id={i}
            key={i} />);
   }
    return (
      <Container>
        <NavBar></NavBar>
        <Main><Image src={mainSrc} /></Main>
        <Selector>
          <Category>{this.props.product.category}</Category>
          <Name>{this.props.product.name}</Name>
          <Price>${mainPrice}</Price>
          <StylesHeader><b>STYLE > </b>{mainStyle}</StylesHeader>
          <div>{stylesArr}</div>
            <div>
              <SizeSelect onChange={this.changeSize} id="sizeSelector">
                <option selected disabled>SELECT SIZE</option>
                {
                  Object.keys(style.skus).map(key => {
                    let k = key;
                    return (<option key={k} value={key}>{style.skus[key].size}</option>)
                  })
                }
              </SizeSelect>
              <QuantitySelect>
                <option selected disabled>-</option>
                {quantityArr}</QuantitySelect>
            </div>
            <div>
              <Button>Add to Bag</Button>
            </div>

        </Selector>
        <Description2></Description2>
        <Description>
          <Slogan>{this.props.product.slogan}</Slogan>
          <DescriptTxt>{this.props.product.description}</DescriptTxt>
        </Description>
      </Container>
    )
  }
}

export default ProductDetail;