//could either separate out controller (if we do then need to "require" the controller to get its functions)
var controller = require('./controller')
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('ratingsnReviews router is working');
  next();
})

router.get('/meta', controller.getReviewMetadata)
router.get('/all', controller.getAllReviews)

router.get('/', )
//fill in with correct url, function
router.post('/addReview', controller.addReview)
//fill in with correct url, function

module.exports = router