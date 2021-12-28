import * as React from "react";
import { useState, useEffect } from "react";
import ProductDetail from './ProductDetail/ProductDetail.jsx'
import { useParams } from "react-router-dom";
const axios = require('axios');
const config = require('../../../server/config/config.js');
import styled from "styled-components"
import "../../dist/style.css"

export default function App() {
  const { id } = useParams();
  const [productId, setProductId] = useState(id);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        console.log(id)
        const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`, {
          headers: {
            'Authorization': config.API_KEY
          }
        });
        setProduct(response.data);
        //console.log(product);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
   <div>
     <ProductDetail
       productId = {productId}
       changeProductId = {setProductId}
       product = {product}
       changeProductId = {setProduct}
     />
   </div>
  )
}
