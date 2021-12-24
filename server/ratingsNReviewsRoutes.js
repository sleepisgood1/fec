//could either separate out controller (if we do then need to "require" the controller to get its functions)
var controller = require('./controller')
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('ratingsNReviews router is working');
  next();
})
router.get('/all', controller.relatedItems.getAllReviews)
router.get('/', )
//fill in with correct url, function
router.post('/addReview', controller.relatedItems.addReview)
//fill in with correct url, function

module.exports = router