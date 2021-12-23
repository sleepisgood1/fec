//could either separate out controller (if we do then need to "require" the controller to get its functions)
var controller = require('./controller')
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('relatedItems router is working');
  next();
})
console.log(controller.relatedItems.getAllProducts)
router.get('/', controller.relatedItems.getAllProducts)

// router.get('/relateditems', )
//fill in with correct url, function
router.post('', )
//fill in with correct url, function
//use parameters to figure out which function to use each time!
module.exports = router