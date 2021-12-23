var models = require('../model');

module.exports = {
  getAllProducts: function(req, res) {
    models.relatedItems.getAllProductsFromApi(req.query.page, req.query.count)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getProductInfo: function(req, res) {
    models.relatedItems.getProductInfoFromApi(req.query.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getAllStylesOfProduct: function(req, res) {
    models.relatedItems.getAllStylesOfProductFromApi(req.query.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getAllRelatedProducts: function(req, res) {
    models.relatedItems.getAllRelatedProductsFromApi(req.query.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
}