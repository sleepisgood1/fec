import * as React from "react";
import { useState, useEffect } from "react";
import ProductDetail from './ProductDetail/ProductDetail.jsx'
import { useParams} from "react-router-dom";
const axios = require('axios');
const config = require('../../../server/config/config.js');
import styled from "styled-components"
import "../../dist/style.css"
import Ratings from './Ratings.jsx'
import RelatedItems from './RelatedItems/RelatedItems.jsx'

export default function App() {
  const { id } = useParams();
  const [productId, setProductId] = useState(id);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [meta, setMeta] = useState({});
  const [reviews, setReviews] = useState({});
  const [relatedProductList, setRelatedProductList] = useState([])
  const onRelatedProductIconClick = (curRelatedProduct) => {
    
  }

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
      .then((response) => {
        setProduct(response.data);
        return response.data
      })
      .then(() => {
        return axios.get(`http://localhost:3000/ratingsnreviews/meta?product_id=${id}`, {
          headers: {
            'Authorization': config.API_KEY
          }
        }) })
          .then((response) => {
            setMeta(response.data);
          })
          .then(() => {
        return axios.get(`http://localhost:3000/ratingsnreviews/all?product_id=${id}`, {
          headers: {
            'Authorization': config.API_KEY
          }
        }) })
          .then((response) => {
            setReviews(response.data);
          })
          .then(()=>{
            return axios.get(`http://localhost:3000/relateditems/related`, {
              params: {
                product_id: id
              }
            })
              .then((response)=>{
                console.log(response.data)
                setRelatedProductList(response.data)
              })
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);

  return (
    <div>
      <ProductDetail
        productId={productId}
        changeProductId={setProductId}
        product={product}
        changeProductId={setProduct}
      />
    <div>
    <RelatedItems
      relatedItems={relatedProductList}
    />
    <Ratings
    meta={meta}
    reviews={reviews}
    />
    </div>
    </div>
  )
}
