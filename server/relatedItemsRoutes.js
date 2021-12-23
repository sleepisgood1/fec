//could either separate out controller (if we do then need to "require" the controller to get its functions)
var controller = require('./controller')
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('relatedItems router is working');
  next();
})
router.get('/all', controller.relatedItems.getAllProducts)
router.get('/info', controller.relatedItems.getProductInfo)
router.get('/styles', controller.relatedItems.getAllStylesOfProduct)
router.get('/related', controller.relatedItems.getAllRelatedProducts
)

module.exports = router