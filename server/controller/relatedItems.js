var models = require('../model');

module.exports = {
  getAllProducts: function(req, res) {
    // console.log('this is getting invoked')
    // console.log('req', req)
    // console.log(models.relatedItems.getAllProductsFromApi)
    models.relatedItems.getAllProductsFromApi()
      .then((results)=>{
        // console.log(results.data)
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
  getAllReviews: function(req, res) {
    models.productDetails.getAllReviewsFromApi(req.query.product_id, req.query.sort, req.query.count)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getReviewMetadata: function(req, res) {
    models.relatedItems.getReviewMetadataFromApi(req.query.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
  addReview: function(req, res) {
    console.log('req.body', req.body)
    models.relatedItems.addReviewToApi(req.body)
      .then((results)=>{
        res.json(results.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },
}
// module.exports.getAllProducts()
