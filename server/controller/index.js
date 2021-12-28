//functions for what the get reuqests and stuff do can live here
// are we using databases to store our own info?? are we creating our own db??? is data living in our server?
// - if we are -> need to import models


// exports.relatedItems = require('./js')
var models = require('../model');

module.exports = {
  getAllProducts: function(req, res) {
    models.getAllProductsFromApi(req.query.page, req.query.count)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getProductInfo: function(req, res) {
    models.getProductInfoFromApi(req.query.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getAllStylesOfProduct: function(req, res) {
    models.getAllStylesOfProductFromApi(req.query.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getAllRelatedProductIds: function(req, res) {
    models.getAllRelatedProductsFromApi(req.query.product_id)
      .then((results)=>{
        res.json(results.data)
      })
      //not being used??
  },
  getAllRelatedProducts: async(req, res) => {
    let relatedProductsInfo = await models.getAllRelatedProductsFromApi(req.query.product_id)
    let productIds = relatedProductsInfo.data
    let allRelatedProducts = productIds.map((product_id)=>{
      return new Promise((resolve, reject) => {
        let aggregatingData = async() => {
          try{
            let reviewMetadata = models.getReviewMetadataFromApi(product_id)
            let allStyles = models.getAllStylesOfProductFromApi(product_id)
            let metaData = await reviewMetadata;
            let styles = await allStyles;
            // console.log('MetaData', metaData)
            // console.log('styles', styles)
            //doing await afterwords instead of doing await when I call/define the functions right away allows both fucntions to run at the same time isnead of one after the other
            let relatedProductInfo = styles.data
            relatedProductInfo.reviewMetadata = metaData.data
            console.log('relatedprodcutsarray', relatedProductInfo)
            return relatedProductInfo
          }
          catch(err) {
            console.log('err in aggregatingData', err)
            return err
          }
          //one product info obj
        }
        //once map is done, gives an array of many products with their indidivdual info
        resolve(aggregatingData())
        reject(`err in ${product_id} promise resolution ${err}`)
      })
    })
    let finalData = await Promise.all(allRelatedProducts)
    // console.log('finalData', finalData)
    res.json(finalData)
      // .then((results)=>{
      //   results.data.map((product_id)=>{
      //     return new Promise((resolve, reject) => {
      //       models.getReviewMetadataFromApi(product_id)
      //         .then
      //       resolve()
      //     })
      //   })
      //   //resutls.data is an array of ids
      // })
    //stopped here
  },
  // trying out await in the above function

  getAllReviews: function(req, res) {
    models.getAllReviewsFromApi(req.query.product_id, req.query.sort, req.query.count)
      .then((results)=>{
        res.json(results.data)
      })
  },
  getReviewMetadata: function(req, res) {
    models.getReviewMetadataFromApi(req.query.product_id)
      .then((results)=>{
        res.json(results.data)
      })
  },
  //sorry Kind of Gave up here lol...
  //will need to add the rest of the controller functions...
  //posts
  addReview: function(req, res) {
    console.log('req.body', req.body)
    models.addReviewToApi(req.body)
      .then((results)=>{
        res.json(results.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },
}
// module.exports.getAllProducts()
