var models = require('../model');

module.exports = {
  getAllProducts: function(req, res) {
    console.log('this is getting invoked')
    // console.log('req', req)
    // console.log(models.relatedItems.getAllProductsFromApi)
    models.relatedItems.getAllProductsFromApi()
      .then((results)=>{
        // console.log(results.data)
        res.json(results.data)
      })
  },
  getProductInfo: function(req, res) {
    models.relatedItems.getProductInfoFromApi(req.body.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getAllStylesOfProduct: function(req, res) {
    models.relatedItems.getAllStylesOfProductFromApi(req.body.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getAllRelatedProducts: function(req, res) {
    models.relatedItems.getAllRelatedProductsFromApi(req.body.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
}
// module.exports.getAllProducts()
