
var models = require('../model');
const outfit = []
const sharp = require('sharp');

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
  getallOutfits: function(req, res) {
    res.json(outfit)
  },
  getAllInfoForCurrProduct: async(req, res) =>{
    let aggregatingData = async() => {
      try{
        var product_id = req.query.product_id
        let reviewMetadata = models.getReviewMetadataFromApi(product_id)
        let allStyles = models.getAllStylesOfProductFromApi(product_id)
        let productInfo = models.getProductInfoFromApi(product_id)
        let metaData = await reviewMetadata;
        let styles = await allStyles;
        let product = await productInfo;

        let outfitProduct = product.data
        outfitProduct.style = styles.data.results[0]
        outfitProduct.reviewMetadata = metaData.data
        var outfitExists = false;
        console.log(outfit)
        for (var i=0;i<outfit.length;i++) {

          if(outfit[i].id === outfitProduct.id) {
            outfitExists = true
          }
        }
        if(!outfitExists) {

          outfitProduct.newProductAdded = true
          outfit.push(outfitProduct)
          console.log(outfit)
        } else {
          outfitProduct.newProductAdded = false
        }

        console.log(outfit)
        return outfit
      }
      catch(err) {
        console.log('err in aggregatingData', err)
        return err
      }

    }
    res.json(await aggregatingData())
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
            let productInfo = models.getProductInfoFromApi(product_id)
            let metaData = await reviewMetadata;
            let styles = await allStyles;
            let product = await productInfo;


            let relatedProductInfo = styles.data
            relatedProductInfo.reviewMetadata = metaData.data

            relatedProductInfo.productInfo = product.data

            return relatedProductInfo
          }
          catch(err) {
            console.log('err in aggregatingData', err)
            return err
          }

        }

        resolve(aggregatingData())
        reject(`err in ${product_id} promise resolution ${err}`)
      })
    })
    let finalData = await Promise.all(allRelatedProducts)

    res.json(finalData)

  },


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

  addReview: function(req, res) {

    models.addReviewToApi(req.body)
      .then((results)=>{
        res.json(results.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },
}

