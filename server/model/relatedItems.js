const axios = require('axios');
const config = require('../config/config.js')

module.exports = {
  getAllProductsFromApi: function (){
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  getProductInfoFromApi: function(product_id){
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${product_id}`, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  getAllStylesOfProductFromApi: function(product_id){
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${product_id}/styles`, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  getAllRelatedProductsFromApi: function(product_id){
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${product_id}/related`, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  //seems like I would need to get all related products and then with the ids get the product styles info for each product and use the thumbnail_url
}