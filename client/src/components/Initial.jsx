import React from 'react';
import { useState, useEffect } from "react";
import ProductDetail from './ProductDetail/ProductDetail.jsx'
const axios = require('axios');
const config = require('../../../server/config/config.js');
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


export default function Initial() {
  console.log(window.location.pathname)
  return (
    <div>Try going to the URL http://localhost:3000/63609 to test</div>
  );
}