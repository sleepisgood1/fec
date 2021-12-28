//could either separate out controller (if we do then need to "require" the controller to get its functions)
var controller = require('./controller')
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('product details router is working');
  next();
})
router.get('/all', controller.productDetails.getAllProducts)
router.get('/info', controller.productDetails.getProductInfo)
router.get('/styles', controller.productDetails.getAllStylesOfProduct)
router.get('/related', controller.productDetails.getAllRelatedProducts
)

module.exports = router