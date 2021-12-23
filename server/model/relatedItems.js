const axios = require('axios');
const config = require('../config/config.js')

module.exports = {
  getFromApi: function (){
    axios.get('', {
      headers: {
        'Authorization': config.API_KEY
      }
    })
  }
}