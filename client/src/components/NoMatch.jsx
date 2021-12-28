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


export default function NoMatch() {
  console.log(window.location.pathname)
  return (
    <div>Nothing to see here!</div>
  );
}