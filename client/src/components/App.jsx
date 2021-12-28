import * as React from "react";
import { useState, useEffect } from "react";
import ProductDetail from './ProductDetail/ProductDetail.jsx'
const axios = require('axios');
const config = require('../../../server/config/config.js');
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Initial from './Initial.jsx';


export default function App() {
  const { id } = useParams();
  const [productId, setProductId] = useState(id);
  return (
   <div>
     <ProductDetail
       productId = {productId}
       changeProduct = {setProductId}
     />
   </div>
  );
}
