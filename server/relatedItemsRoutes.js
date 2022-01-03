//could either separate out controller (if we do then need to "require" the controller to get its functions)
var controller = require('./controller')
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('relatedItems router is working');
  next();
})
router.get('/all', controller.getAllProducts)
router.get('/info', controller.getProductInfo)
router.get('/styles', controller.getAllInfoForCurrProduct)
router.get('/outfits', controller.getallOutfits)

router.get('/related', controller.getAllRelatedProducts
)

module.exports = router