const axios = require('axios');
const config = require('../config/config.js')

module.exports = {
  getAllProductsFromApi: function (page = 1, count = 5){
    //gotta put in page/count in parameters
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {
      params: {
        page,
        count
      },
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
  /////////////
  getAllReviewsFromApi: function(product_id, sort, page = 1 , count = 5) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/`, {
      //cchec kif the last / is needed in url
      params: {
        page,
        count,
        sort,
        product_id
      },
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  getReviewMetadataFromApi: function(product_id) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta`, {
      params: {
        product_id
      },
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  addReviewToApi: function(bodyParams) {
    //https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews
    return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews`, bodyParams, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  markReview: function(review_id){
    return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${review_id}/helpful`, null, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  reportReview: function(review_id){
    return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${review_id}/report`, null, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  listQuestions: function(product_id, page=1, count=5) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions`, {
      params: {
        page,
        count,
        product_id
      },
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  listAnswers: function(question_id, page=1, count=5) {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/answers`, {
      params: {
        page,
        count
      },
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  addQuestion: function(bodyParams) {
    return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions`, bodyParams, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  addAnswer: function(bodyParams) {
    return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/answers`, bodyParams, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  markQuestionAsHelpful: function(question_id) {
    return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/helpful`, null, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  reportQuestion: function(question_id) {
    return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/report`, null, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  markAnswerAsHelpful: function(answer_id) {
    return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${answer_id}/helpful`, null, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  markAnswerAsHelpful: function(answer_id) {
    return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${answer_id}/report`, null, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  getCart: function(){
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart`, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  },
  addToCart: function(sku_id){
    return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart`, sku_id, {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  }
  //seems like I would need to get all related products and then with the ids get the product styles info for each product and use the thumbnail_url
}