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
import OutfitList from './OutfitList/OutfitList.jsx'
// require('dotenv').config()

export default function App() {
  const { id } = useParams();
  const [productId, setProductId] = useState(id);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [meta, setMeta] = useState({});
  const [reviews, setReviews] = useState({});
  const [relatedProductList, setRelatedProductList] = useState([])
  // var host = "http://54.183.148.200"
  const env = process.env.NODE_ENV? process.env.NODE_ENV : "development"
  if (env === 'development') {
    var host = "http://localhost:3000"
  }
  if (env === 'production') {
    var host = "http://54.183.148.200"
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
        return axios.get(`${host}/ratingsnreviews/meta?product_id=${id}`, {
          headers: {
            'Authorization': config.API_KEY
          }
        }) })
          .then((response) => {
            setMeta(response.data);
          })
          .then(() => {
        return axios.get(`${host}/ratingsnreviews/all?product_id=${id}`, {
          headers: {
            'Authorization': config.API_KEY
          }
        }) })
          .then((response) => {
            setReviews(response.data);
          })
          .then(()=>{
            return axios.get(`${host}/relateditems/related`, {
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
    <h1>
      Related Items
      </h1>
    <RelatedItems
      relatedItems={relatedProductList}
      product={product}
    />
    <h1>
      Outfit List
      </h1>
    <OutfitList
      product={product}
      reviews={reviews}

    />
    </div>
    </div>
  )
}
